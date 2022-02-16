/* requesição de pacotes */
const express = require('express')
const exphbs = require('express-handlebars')

/* definir aplicativo express */
app = express()

/* definir porta */
const port = 3002

/* ========================================= */

app.engine('handlebars', exphbs.engine()) 

/* View Engine express-handlebars */
app.set('view engine', 'handlebars')

/* definir pasta statica */
app.use(express.static('public'))

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

// define qual o template a ser utilizado
app.engine('handlebars', hbs.engine) 

/* route home */
app.get('/', (req, res) => {

  /* array Nome */
  const Nome = [
    {
      name: "Diego",
      apelido: "Div",
      age: 19
    }
  ]
  
  /* renderizar diretório home e pasar array Nome para o front */
  res.render('home', { Nome: Nome })

})

/* router sobre */
app.get('/sobre', (req, res) => {
  res.send('sobre :)')
})

/* router de erros de status */
app.use((req, res, next) => {
  //res.status(404).sendFile(`${basePath}/404.html`)
  res.status(404).send('Erro arquivo não encontrato - 404!')
  res.status(500).send('Erro servidor - 500!')
})

/* Abrir porta local */
app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
