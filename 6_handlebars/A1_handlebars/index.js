const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const app = express()
app.engine('handlebars', exphbs.engine()) 

app.set('view engine', 'handlebars')



app.get( '/', (req, res) => {
  res.render('home', { layout: false })
})

app.use((req, res, next) => {
  //res.status(404).sendFile(`${basePath}/404.html`)
  res.status(404).send('Erro arquivo não encontrato - 404!')
  res.status(500).send('Erro servidor - 500!')
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
