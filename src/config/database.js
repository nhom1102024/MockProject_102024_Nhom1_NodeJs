const sqlConfig = {
  user: 'sa',
  password: 'ahihi@1234',
  database: 'apartment',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

module.exports = sqlConfig;