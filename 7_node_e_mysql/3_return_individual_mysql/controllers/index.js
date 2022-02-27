//"chalk": "^3.0.0",
//"express-handlebars": "^5.3.3"
//"boxen": "^5.1.2"

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

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.post('/books/insertbook', (req, res) => {
  const now = new Date()
  const dia = now.getDate()
  const mes = now.getMonth() + 1
  const ano = now.getFullYear()
  const horas = now.getHours()
  const minutos = now.getMinutes()

  const title = req.body.title
  const pages = req.body.pages

  // eslint-disable-next-line quotes
  /* ${ano}-${mes}-${dia} */
  const sql = `INSERT INTO Books (title, pages) VALUES ( '${title}', '${pages}')`

  conn.query(sql, function (err) {
    if (err) {
      console.log(
        boxen(
          `
Erro no sql: ${chalk.red(err)}s

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
    }

    res.redirect('/books')
  })
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

app.get('/books/:id', function (req, res) {
  const id = req.params.id

  const sql = `SELECT * FROM Books WHERE id = ${id}`

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(
        boxen(`Erro no sql :id ${chalk.red(err)}`,
          {
            margin: 1,
            float: 'center',
            padding: 1,
            borderStyle: 'round',
            borderColor: 'green',
          }
        )
      )
    }

    const Book = data[0]

    console.log(data[0])

    res.render('book', { Book })
  })
})

/* ----- */
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'div',
  password: '20020000',
  database: 'nodemysql_2',
})

conn.connect((err) => {
  if (err) {
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
})

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