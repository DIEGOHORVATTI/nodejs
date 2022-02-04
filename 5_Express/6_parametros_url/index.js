const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const app = express()
const port = 3000


app.get('/users/:id', (req, res) => {

  const id = req.params.id

  //leitura da tabela userns, resgatar um usíario
  console.log(`Estamos buscando pelo usuário: ${id} `)

  res.sendFile(`${basePath}/users.html`)
})


app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`)
})