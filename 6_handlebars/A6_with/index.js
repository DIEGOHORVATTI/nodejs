const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const app = express()
app.engine('handlebars', exphbs.engine()) 

app.set('view engine', 'handlebars')

app.get('/painel', (req, res) =>{
  
  const items = ['a', 'b', 'c', 'd']
  
  res.render('painel', { items })
})

app.get('/post', (req, res)  =>{

  const Post = {
    title: 'Aprender NodeJs',
    category: 'js',
    body: 'aprendendo e vendo jojo',
    comemments: 8
  }

  res.render('post', { Post })

})

app.get( '/', (req, res) => {

  const user = {
    name: "Diego",
    apelido: "Div",
    age: 19
  }

  const auth = true

  res.render('home', { user: user, auth })
})

app.use((req, res, next) => {
  //res.status(404).sendFile(`${basePath}/404.html`)
  res.status(404).send('Erro arquivo não encontrato - 404!')
  res.status(500).send('Erro servidor - 500!')
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
