const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/routes');
const cors = require('cors');
const sqlConfig = require('./src/config/database');
const app = express();
const mssql = require('mssql');

const connectionPool = new mssql.ConnectionPool(sqlConfig);
connectionPool.connect().then(pool => {
  app.locals.db = pool;
});
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})

module.exports = app;