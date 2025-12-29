const express = require('express');
const router = express.Router();
const profileService = require('../services/profileService');
const { readSession } = require('./auth'); // 依你的實際路徑調整

router.post('/api/profile', (req, res) => {
  const session = readSession(req);
  if (!session?.email) return res.status(401).json({ ok: false, message: 'Unauthorized' });

  const { profile } = req.body || {};
  if (!profile) return res.status(400).json({ ok: false, message: 'Invalid payload' });

  try {
    const result = profileService.saveProfile(session.email, profile);
    return res.json({ ok: true, ...result });
  } catch (err) {
    console.error('profile save error', err);
    return res.status(500).json({ ok: false, message: 'Failed to save' });
  }
});

module.exports = router;
