const sqlConfig = {
  user: process.env.MSSQL_USERNAME,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DBNAME,
  server: process.env.MSSQL_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: process.env.MSSQL_ENCRYPT || true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

module.exports = sqlConfig