const { initDb } = require('../db');

const db = initDb();

// statement cache（避免每次 prepare）
const upsertProfileStmt = db.prepare(`
  INSERT INTO profiles_current (userEmail, profile, updatedAtMs, updatedAt)
  VALUES (?, ?, ?, ?)
  ON CONFLICT(userEmail) DO UPDATE SET
    profile = excluded.profile,
    updatedAtMs = excluded.updatedAtMs,
    updatedAt = excluded.updatedAt
`);

function saveProfile(userEmail, profile) {
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();

  upsertProfileStmt.run(
    userEmail,
    JSON.stringify(profile),
    nowMs,
    nowIso
  );

  return {
    userEmail,
    updatedAt: nowIso,
    updatedAtMs: nowMs,
  };
}

module.exports = { saveProfile };