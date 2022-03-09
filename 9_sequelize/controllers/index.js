//"chalk": "^3.0.0",
//"express-handlebars": "^5.3.3"
//"boxen": "^5.1.2"

/* ??=>'string' || ?=>'num' */

const express = require('express')
const exphbs = require('express-handlebars')
const boxen = require('boxen')
const chalk = require('chalk')
const pool = require('../model/conn')

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

  pool.query(sql, function (err, data) {
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

app.get('/books/:id', (req, res)=> {
  const id = req.params.id

  // eslint-disable-next-line quotes
  const sql = `SELECT * FROM Books WHERE ?? = ?`
  data = ['id', id]

  pool.query(sql, data, (err, data)=> {
    if (err) {
      console.log(
        boxen(`Erro no sql id => ${chalk.red(err)}`, {
          margin: 1,
          float: 'center',
          padding: 1,
          borderStyle: 'round',
          borderColor: 'green',
        })
      )
    }

    const Book = data[0]

    console.log(data[0])

    res.render('book', { Book })
  })
})

app.post('/books/insertbook', (req, res) => {
  const now = new Date()
  const dia = now.getDate()
  const mes = now.getMonth() + 1
  const ano = now.getFullYear()
  const horas = now.getHours()
  const minutos = now.getMinutes()

  const title = req.body.title
  const pages = req.body.pages
  /* ${ano}-${mes}-${dia} */

  // eslint-disable-next-line quotes
  const sql = `INSERT INTO Books (??, ??) VALUES ( ?, ?)`
  data = ['title', 'pages', title, pages]

  pool.query(sql, data, (err)=> {
    if (err) {
      console.log(
        boxen(`Erro no sql insertbook => ${chalk.red(err)}`, {
          margin: 1,
          float: 'center',
          padding: 1,
          borderStyle: 'round',
          borderColor: 'green',
        })
      )
    }

    res.redirect('/books')
  })
})

app.get('/books/edit/:id', (req, res)=>{

  const id = req.params.id

  // eslint-disable-next-line quotes
  const sql = `SELECT * FROM Books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(
        boxen(`Erro no sql edit => ${chalk.red(err)}`, {
          margin: 1,
          float: 'center',
          padding: 1,
          borderStyle: 'round',
          borderColor: 'green',
        })
      )
    }

    const Book = data[0]

    res.render('bookEdit', { Book })
  })
})

app.post('/books/exclud/:id', (req, res) => {

  const id = req.params.id

  // eslint-disable-next-line quotes
  const sql = `DELETE FROM Books WHERE ?? = ?`
  data = ['id', id]

  pool.query(sql, data, (err, data)=> {
    if (err) {
      console.log(
        boxen(`Erro no sql delet => ${chalk.red(err)}`, {
          margin: 1,
          float: 'center',
          padding: 1,
          borderStyle: 'round',
          borderColor: 'green',
        })
      )
      return
    }

    res.redirect('/books')
  })
})

app.get('/books/update', (req, res)=>{
  if (err) {
    console.log(
      boxen(`Erro no sql update => ${chalk.red(err)}`, {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: 'round',
        borderColor: 'green',
      })
    )
  }

  const id = req.body.id
  const title = req.body.title
  const pages = req.body.pages

  // eslint-disable-next-line quotes
  const sql = `UPDATE Books SET ?? = ?, ?? = ? WHERE ?? = ?`
  data = ['title', title, 'pages', pages, 'id', id]
  pool.query(sql, (err)=> {
    if (err) {
      console.log(
        boxen(`Erro no sql insertbook => ${chalk.red(err)}`, {
          margin: 1,
          float: 'center',
          padding: 1,
          borderStyle: 'round',
          borderColor: 'green',
        })
      )
    }
  })

  const Book = data[0]

  res.render('bookEdit', { Book })
})

app.post('/books/updatebook', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const pages = req.body.pages
  // eslint-disable-next-line quotes
  const sql = 'UPDATE Books SET ?? = ?, ?? = ? WHERE ?? = ?'
  data = ['title', title, 'pages', pages, 'id', id]

  pool.query(sql, data, (err)=> {
    if (err) {
      console.log(
        boxen(`Erro no sql bookupdate => ${chalk.red(err)}`, {
          margin: 1,
          float: 'center',
          padding: 1,
          borderStyle: 'round',
          borderColor: 'green',
        })
      )
      return
    }
    res.redirect('/books')
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