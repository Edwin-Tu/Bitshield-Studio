const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || `http://localhost:${PORT}/auth/google/callback`;

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bitshield backend is running.' });
});

// Redirect user to Google's OAuth consent page
app.get('/auth/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'profile', 'email'],
    prompt: 'consent',
  });
  res.redirect(url);
});

// OAuth2 callback - exchange code for tokens and redirect to frontend with id_token
app.get('/auth/google/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('Missing code');

  try {
    const { tokens } = await oauth2Client.getToken(code);
    const idToken = tokens.id_token;
    if (!idToken) {
      return res.status(500).send('No id_token returned');
    }

    // Verify ID token (optional but recommended)
    await oauth2Client.verifyIdToken({ idToken, audience: CLIENT_ID });

    // Redirect to frontend with the id_token (frontend will parse it)
    const redirectUrl = `${FRONTEND_URL}/?id_token=${encodeURIComponent(idToken)}`;
    return res.redirect(redirectUrl);
  } catch (err) {
    console.error('Google auth error:', err);
    return res.status(500).send('Authentication error');
  }
});

app.listen(PORT, () => {
  console.log(`Bitshield backend listening on port ${PORT}`);
});
