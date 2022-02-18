//"chalk": "^3.0.0",
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const boxen = require('boxen')
const chalk = require('chalk')

const app = express()
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'div',
  password: '20020000',
  database: 'nodemysql_2',
})

conn.connect((err) => {

  if(err){
    console.log(
      boxen(`Erro de conexão no banco: ${chalk.red(err)}`, {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: 'round',
        borderColor: 'green',
      })
    )
  }
  else{
    app.listen(port, () => {
      console.log(
        boxen(
          `
Aberto na porta ${chalk.red(port)}

${chalk.green.bgCyan('Conectado ao MySQL!')}
          `,
          {
            margin: 1,
            float: 'center',
            padding: 1,
            borderStyle: 'round',
            borderColor: 'green',
          }
        )
      )
    })
  }

})
