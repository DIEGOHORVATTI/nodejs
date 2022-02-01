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

  console.log(`${name}\n${idade}`)

 res.json({ mesage: `Meu nome é ${name} tenho ${idade} anos` })

})

app.get('/', (req, res) => {
  res.json({ 
    name: 'Div',
    idade: "16"
  })
})

app.listen(3000)