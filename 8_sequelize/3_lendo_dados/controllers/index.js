//"chalk": "^3.0.0",
//"express-handlebars": "^5.3.3"
//"boxen": "^5.1.2"

/* ??=>'string' || ?=>'num' */

const express = require('express')
const exphbs = require('express-handlebars')
const boxen = require('boxen')
const chalk = require('chalk')
const conn = require('../db/conn')

const User = require('../model/User')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', async (req, res) => {

  const users = await User.findAll({raw: true})

  console.log(users)

  res.render('home', { users: users })
})

app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/users/create', async (req, res) => {
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter === 'on') {
    newsletter = true
  }else{
    newsletter = false
  }

  await User.create({ name, occupation, newsletter })

  res.redirect('/users/create')
})


/* ----- */

const port = 3000

conn.sync().then(()=>{
  app.listen(port, () => {
    console.log(
      boxen(`Aberto na porta ${chalk.red(port)}`, {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: 'round',
        borderColor: 'green',
      })
    )
  })
}).catch((err)=>{
  console.log(
    boxen(`Erro na conexão|(index.js->conn): ${chalk.red(err)}`, {
      margin: 1,
      float: 'center',
      padding: 1,
      borderStyle: 'round',
      borderColor: 'green',
    })
  )
})