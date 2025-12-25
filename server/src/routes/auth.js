const express = require('express');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');

dotenv.config();

const router = express.Router();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || '';

const APP_JWT_SECRET = process.env.APP_JWT_SECRET || '';
const APP_JWT_EXPIRES_IN = process.env.APP_JWT_EXPIRES_IN || '7d';

const COOKIE_NAME = process.env.APP_COOKIE_NAME || 'bs_session';
const OAUTH_STATE_COOKIE = process.env.OAUTH_STATE_COOKIE || 'bs_oauth_state';

const allowedTeamEmails = (process.env.ALLOWED_TEAM_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !APP_JWT_SECRET) {
  console.warn(
    '[WARN] Missing env vars: GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REDIRECT_URI / APP_JWT_SECRET'
  );
}

if (allowedTeamEmails.length === 0) {
  console.warn('[WARN] ALLOWED_TEAM_EMAILS is empty. All logins will be rejected.');
}

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

// 小工具：驗證 session cookie
function readSession(req) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return null;
  try {
    return jwt.verify(token, APP_JWT_SECRET);
  } catch {
    return null;
  }
}

/**
 * GET /auth/google
 * Redirect user to Google's OAuth consent page
 */
router.get('/auth/google', authLimiter, (req, res) => {
  // OAuth state: basic CSRF protection
  const state = crypto.randomBytes(16).toString('hex');

  // 存 state 到 HttpOnly cookie（短效）
  res.cookie(OAUTH_STATE_COOKIE, state, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 10 * 60 * 1000, // 10 mins
  });

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'profile', 'email'],
    prompt: 'consent',
    state,
  });

  return res.redirect(url);
});

/**
 * GET /auth/google/callback?code=xxx&state=yyy
 */
router.get('/auth/google/callback', authLimiter, async (req, res) => {
  const code = req.query.code;
  const returnedState = req.query.state;

  if (!code) return res.status(400).send('Missing code');

  // 驗 state
  const expectedState = req.cookies?.[OAUTH_STATE_COOKIE];
  if (!expectedState || !returnedState || expectedState !== returnedState) {
    return res.status(400).send('Invalid OAuth state');
  }

  // 用完就清掉 state cookie
  res.clearCookie(OAUTH_STATE_COOKIE);

  try {
    const { tokens } = await oauth2Client.getToken(String(code));
    const idToken = tokens.id_token;
    if (!idToken) return res.status(500).send('No id_token returned');

    const ticket = await oauth2Client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload?.email?.toLowerCase();

    if (!email) return res.status(500).send('No email in token');

    if (!allowedTeamEmails.includes(email)) {
      return res.status(403).send('This account is not allowed to access admin.');
    }

    const name = payload?.name || '';
    const picture = payload?.picture || '';

    const appToken = jwt.sign(
      { email, role: 'team', name, picture },
      APP_JWT_SECRET,
      { expiresIn: APP_JWT_EXPIRES_IN }
    );

    res.cookie(COOKIE_NAME, appToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.redirect(`${FRONTEND_URL}/admin`);
  } catch (err) {
    console.error('Google auth error:', err);
    return res.status(500).send('Authentication error');
  }
});

/**
 * GET /auth/me
 * Frontend can call this to check login status.
 */
router.get('/auth/me', (req, res) => {
  const token = req.cookies?.bs_session;
  if (!token) {
    return res.status(401).json({ ok: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.APP_JWT_SECRET);
    return res.json({
      ok: true,
      user: {
        email: decoded.email,
        role: decoded.role,
        name: decoded.name || '',
        picture: decoded.picture || '',
      },
    });
  } catch {
    return res.status(401).json({ ok: false });
  }
});


/**
 * POST /auth/logout
 * Clear session cookie
 */
router.post('/auth/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  return res.json({ ok: true });
});

module.exports = router;
