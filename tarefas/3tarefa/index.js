const express = require('express')
const app = express()
const port = 5000
const router = require('./routes/router')

// definir rota statica
app.use(express.static('./public'))

app.use('/', router)

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})

app.use(function (req, res, next) {
  //res.status(404).sendFile(`${basePath}/404.html`)
  res.status(404).send('Erro arquivo não encontrato - 404!')
  res.status(500).send('Erro servidor - 500!')
})