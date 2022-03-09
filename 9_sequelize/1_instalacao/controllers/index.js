//"chalk": "^3.0.0",
//"express-handlebars": "^5.3.3"
//"boxen": "^5.1.2"

/* ??=>'string' || ?=>'num' */

const express = require('express')
const exphbs = require('express-handlebars')
const boxen = require('boxen')
const chalk = require('chalk')
const conn = require('../model/conn')

const app = express()
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/books', (req, res) => {
  // eslint-disable-next-line quotes
  const sql = 'SELECT * FROM Books'

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(
        boxen(`Erro no sql /books: ${chalk.red(err)}`,
          {
            margin: 1,
            float: 'center',
            padding: 1,
            borderStyle: 'round',
            borderColor: 'green',
          }
        )
      )
      return
    }

    const Books = data
    
    res.render('books', { Books })

  })
})

/* ----- */

app.listen(port, ()=> {
  console.log(
    boxen(`Aberto na porta ${chalk.red(port)}`,
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