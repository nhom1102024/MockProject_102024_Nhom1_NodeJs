const sqlConfig = require('../config/database')
const mssql = require('mssql');
// const sql = require('../models/employee-contract/getAllContract.sql');
const fs = require('fs');
const path = require('path');
const loadSqlQueries = require('../helper/loadSqlQueries');
class EmployeeController {
  async getAllContract(req, res) {
    const { limit = 'auto', page = 'none' } = req.query
    const { db } = req.app.locals;
    const result = await db.query(`select * from profile`).recordset
    console.log(result)
    res.json(result)
  }
  async getContractDetail(req, res) {
    const { contractId } = req.query;
    const { db } = req.app.locals;
    const result = await db.query(`select * from contract where contract_id = ${contractId}`)
    res.status(200).json({
      data: result
    })
  }
  async addAContract(req, res) {
    const { employeeId, customerId, serviceId, startDate, endDate, contractTerms, specialTerms, amount } = req.body
  }
}
module.exports = new EmployeeController()