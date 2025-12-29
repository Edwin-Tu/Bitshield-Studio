const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

function initDb() {
  const dataDir = path.join(__dirname, '..', 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const dbFile = path.join(dataDir, 'app.db');
  const db = new Database(dbFile);

  // runtime pragmas
  db.pragma('journal_mode = WAL');
  db.pragma('synchronous = NORMAL');
  db.pragma('busy_timeout = 5000');

  // current table (direction B)
  db.exec(`
    CREATE TABLE IF NOT EXISTS profiles_current (
      userEmail TEXT PRIMARY KEY,
      profile TEXT NOT NULL,
      updatedAtMs INTEGER NOT NULL,
      updatedAt TEXT NOT NULL
    );
  `);

  return db;
}

module.exports = { initDb };
