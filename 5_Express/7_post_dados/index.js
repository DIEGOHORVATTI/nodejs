const express = require('express')
const path = require('path')
const app = express()
const basePath = path.join(__dirname, 'templates')


app.listen(3000, () => {console.log(`port ` + 3000)})

//ler corpo da reuisição
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save', (req, res) => {

  console.log(req.body)

  const name = req.body.name
  const age = req.body.age
  console.log(`${name}\n\b${age}`)
  
  res.sendFile(`${basePath}/enviado.html`)

})

app.get('/users/:id', (req, res) => {

  const id = req.params.id

  //leitura da tabela userns, resgatar um usíario
  console.log(`Estamos buscando pelo usuário: ${id} `)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})