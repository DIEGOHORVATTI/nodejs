const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const app = express()
const port = 3000

const checkAuth = function(req, res, next){
  
  req.checkStatus = true
  
  if (req.checkStatus){
    console.log('Está logado')
    next()
    return
  }
  else{
    console.log('não está logado, faça login para continuar')
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`)
})