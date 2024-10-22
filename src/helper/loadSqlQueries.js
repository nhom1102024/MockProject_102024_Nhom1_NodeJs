const fs = require('fs');
const path = require('path');

const loadSqlQueries = (folderName, fileName) => {
  const filePath = path.join(process.cwd(), '/src/queries/', folderName, '/', `${fileName}.sql`)
  const sqlQuery = fs.readFileSync(filePath).toString()
  return sqlQuery
}
module.exports = loadSqlQueries