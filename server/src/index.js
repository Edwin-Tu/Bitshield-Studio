const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// 允許多個前端來源（逗號分隔）
const allowedOrigins = (process.env.CORS_ORIGINS || FRONTEND_URL)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

// --- Middlewares ---
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

// CORS：dev 可以放 localhost；上線務必鎖定正式網域
app.use(
  cors({
    origin(origin, cb) {
      // 允許 Postman / server-to-server（origin 可能為 undefined）
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error('CORS blocked'), false);
    },
    credentials: true,
  })
);

// 基本的限流（你也可以針對 /auth 再加更嚴格的 limiter）
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(generalLimiter);

// --- Routes ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bitshield backend is running.' });
});

// 掛載 auth routes（你提供的 route.js，我把它變成 auth router）
const authRouter = require('./routes/auth');
app.use(authRouter);
const profileRouter = require('./routes/profile');
app.use(profileRouter);

/**
 * 登出：清掉 cookie
 */
app.post('/auth/logout', (req, res) => {
  res.clearCookie('bs_session', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  res.json({ message: 'Logged out' });
});

// 你可以保留一個後台保護路由示範（可刪）
app.get('/api/admin/ping', (req, res) => {
  // 真正的 RBAC 我建議下一步抽 middleware（verifyToken/requireRole）
  const jwt = require('jsonwebtoken');
  const token = req.cookies?.bs_session;
  if (!token) return res.status(401).json({ message: 'Not logged in' });

  try {
    const decoded = jwt.verify(token, process.env.APP_JWT_SECRET);
    if (decoded.role !== 'team' && decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    return res.json({ ok: true, message: 'Admin route ok', user: decoded });
  } catch {
    return res.status(401).json({ message: 'Invalid session' });
  }
});

app.listen(PORT, () => {
  console.log(`Bitshield backend listening on port ${PORT}`);
});
