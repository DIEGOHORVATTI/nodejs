const express = require('express')
const app  = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())
//rotas - endpoints

app.post('/discord', (req, res) => {
  const name = req.body.name
  const idade = req.body.idade

  if(!name){
    res.status(422).json({ message: `O campo é obritatório` })
    return
  }

  console.log(`${name}\n${idade}`)

  res.status(201).json({ mesage: `Meu nome é ${name} tenho ${idade} anos` })

})

app.get('/', (req, res) => {
  res.status(200).json({ 
    name: 'Div',
    idade: "16"
  })
})

app.listen(3000)