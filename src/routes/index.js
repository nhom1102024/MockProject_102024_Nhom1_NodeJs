const express = require('express')
const router = express.Router();
const employeeRoute = require('./employee.route.js');

router.use('/employee', employeeRoute)
module.exports = router
