const express = require('express')
const app = express()
const port = 3000

app.get('/', (requisicao, resposta) => {
  resposta.send('hello word!!')
})

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`)
})