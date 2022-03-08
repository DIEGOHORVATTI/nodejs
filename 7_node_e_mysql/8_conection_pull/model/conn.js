const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'div',
  password: '20020000',
  database: 'nodemysql_2',
})

module.exports = pool