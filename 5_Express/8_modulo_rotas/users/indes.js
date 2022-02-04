const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/usersform.html`)
})

router.post('/save', (req, res) => {

  console.log(req.body)

  const name = req.body.name
  const age = req.body.age
  console.log(`${name}\n\b${age}`)

  res.sendFile(`${basePath}/enviado.html`)

})

router.get('/:id', (req, res) => {

  const id = req.params.id

  //leitura da tabela userns, resgatar um usíario
  console.log(`Estamos buscando pelo usuário: ${id} `)

  res.sendFile(`${basePath}/users.html`)
})

module.export = router