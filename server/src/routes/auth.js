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

// 這份名單只用來判斷 Admin（不再用來拒絕登入）
const allowedAdminEmails = (process.env.ALLOWED_TEAM_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !APP_JWT_SECRET) {
  console.warn(
    '[WARN] Missing env vars: GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REDIRECT_URI / APP_JWT_SECRET'
  );
}

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

// 小工具：讀取並驗證 session cookie
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
 * 導向 Google OAuth
 */
router.get('/auth/google', authLimiter, (req, res) => {
  // state：基本 CSRF 防護
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
 * 需求：只要 Google OAuth 成功且不觸發資安條件，就一律登入成功並導回首頁
 * 角色：在 allowedAdminEmails 名單 → admin；否則 → customer
 */
router.get('/auth/google/callback', authLimiter, async (req, res) => {
  const code = req.query.code;
  const returnedState = req.query.state;

  // Google 回來沒有 code：視為失敗（導回首頁，可加 error 參數）
  if (!code) return res.redirect(`${FRONTEND_URL}/?auth=error&reason=missing_code`);

  // 驗 state（CSRF 防護）
  const expectedState = req.cookies?.[OAUTH_STATE_COOKIE];
  if (!expectedState || !returnedState || expectedState !== returnedState) {
    return res.redirect(`${FRONTEND_URL}/?auth=error&reason=invalid_state`);
  }

  // 用完就清 state cookie
  res.clearCookie(OAUTH_STATE_COOKIE);

  try {
    const { tokens } = await oauth2Client.getToken(String(code));
    const idToken = tokens.id_token;
    if (!idToken) return res.redirect(`${FRONTEND_URL}/?auth=error&reason=no_id_token`);

    const ticket = await oauth2Client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const email = payload?.email?.toLowerCase();
    const emailVerified = payload?.email_verified;

    // 基本資安條件：必須有 email 且 email 必須已驗證
    if (!email) return res.redirect(`${FRONTEND_URL}/?auth=error&reason=no_email`);
    if (emailVerified !== true) {
      return res.redirect(`${FRONTEND_URL}/?auth=error&reason=email_not_verified`);
    }

    const name = payload?.name || '';
    const picture = payload?.picture || '';

    // 角色判斷：名單內為 admin，其餘一律 customer
    const role = allowedAdminEmails.includes(email) ? 'admin' : 'customer';

    // 簽發 app session token
    const appToken = jwt.sign({ email, role, name, picture }, APP_JWT_SECRET, {
      expiresIn: APP_JWT_EXPIRES_IN,
    });

    // 寫入 HttpOnly cookie
    res.cookie(COOKIE_NAME, appToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 成功：一律導回首頁
    return res.redirect(`${FRONTEND_URL}/`);
  } catch (err) {
    console.error('Google auth error:', err);
    // 失敗：導回首頁（你也可以改成 /login?error=...）
    return res.redirect(`${FRONTEND_URL}/?auth=error&reason=exception`);
  }
});

/**
 * GET /auth/me
 * 前端用來確認是否已登入，並取得使用者資料（name/picture/email/role）
 */
router.get('/auth/me', (req, res) => {
  const token = req.cookies?.[COOKIE_NAME]; // 不要寫死 bs_session
  if (!token) return res.status(401).json({ ok: false });

  try {
    const decoded = jwt.verify(token, APP_JWT_SECRET);
    return res.json({
      ok: true,
      user: {
        email: decoded.email,
        role: decoded.role,        // 'admin' 或 'customer'
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
 * 清除 session cookie
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
