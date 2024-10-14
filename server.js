const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/routes/index');
// import authRoutes from './src/routes/authRoute'
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})

module.exports = app;