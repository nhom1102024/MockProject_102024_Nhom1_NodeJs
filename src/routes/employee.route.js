const express = require('express');
const employeeController = require('../controllers/employee.controller');
const router = express.Router();

router.get('/contract', employeeController.getAllContract)

module.exports = router
