const express = require('express')
const path = require('path')
const app = express()

app.listen(3000, () => {console.log(`port ` + 3000)})

const users = ('./users')

//ler corpo da reuisição
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})