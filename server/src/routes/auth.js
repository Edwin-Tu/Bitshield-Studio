const express = require('express');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

dotenv.config();

const router = express.Router();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI =
  process.env.GOOGLE_REDIRECT_URI || `http://localhost:${PORT}/auth/google/callback`;

const APP_JWT_SECRET = process.env.APP_JWT_SECRET || '';
const APP_JWT_EXPIRES_IN = process.env.APP_JWT_EXPIRES_IN || '7d';

const allowedTeamEmails = (process.env.ALLOWED_TEAM_EMAILS || '')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean);

if (!CLIENT_ID || !CLIENT_SECRET || !APP_JWT_SECRET) {
  console.warn(
    '[WARN] Missing env vars. Please check GOOGLE_CLIENT_ID/SECRET and APP_JWT_SECRET.'
  );
}

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// 對 auth 路由加強限流（防止被一直刷）
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Redirect user to Google's OAuth consent page
 * GET /auth/google
 */
router.get('/auth/google', authLimiter, (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'profile', 'email'],
    prompt: 'consent',
  });
  res.redirect(url);
});

/**
 * OAuth2 callback
 * GET /auth/google/callback?code=xxx
 *
 * 改良重點：
 * - 不把 Google 的 id_token 放到前端 URL
 * - 後端驗證 email 後，簽自己的 session JWT 放 HttpOnly cookie
 * - 導回前端 /admin（或你想要的後台入口）
 */
router.get('/auth/google/callback', authLimiter, async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('Missing code');

  try {
    const { tokens } = await oauth2Client.getToken(code);
    const idToken = tokens.id_token;
    if (!idToken) return res.status(500).send('No id_token returned');

    // Verify Google ID token and extract email
    const ticket = await oauth2Client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload?.email;

    if (!email) return res.status(500).send('No email in token');

    // White-list check (team only)
    if (!allowedTeamEmails.includes(email)) {
      return res.status(403).send('This account is not allowed to access admin.');
    }

    // Issue our own app session token
    const appToken = jwt.sign(
      { email, role: 'team' }, // 你可改成 admin/team 分級
      APP_JWT_SECRET,
      { expiresIn: APP_JWT_EXPIRES_IN }
    );

    // Set HttpOnly cookie (JS cannot read it)
    res.cookie('bs_session', appToken, {
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

module.exports = router;
