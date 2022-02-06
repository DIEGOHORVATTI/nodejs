const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

const app = express()
app.engine('handlebars', hbs.engine) 


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


app.get('/carros', (req, res) => {

  const Car = [
    {
      modelo: 'corolla',
      marca: 'Toyota',
      placas: '4587-ERTG',
      color: 'red',
      yar: 2006,
      photo: 'https://cdn.motor1.com/images/mgl/lQA9l/s1/toyota-corolla-gr-s-2021-abre.jpg'
    },
    {
      modelo: 'Uno',
      marca: 'fiat',
      placas: '4846-RTYU',
      color: 'write',
      yar: 2011,
      photo: 'https://img1.icarros.com/dbimg/imgadicionalanuncio/1/236625841_1.jpg'
    },
    {
      modelo: 'Impala 67',
      marca: 'Avamiller',
      placas: '6780-RTYU',
      color: 'black',
      yar: 1967,
      photo: 'https://media.gazetadopovo.com.br/2013/05/981cfac5fbde4b5486bd383ce72df438-gpMedium.jpg'
    }
  ]

  res.render('carros', { Car })
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
