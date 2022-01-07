const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statuscode = 200
  res.setHeader('contenty-Type', 'text/html')
  res.end(
    '<h1>ola mundo não</h1><hr><footer>direitos reservados©</footer>'
  )

})

server.listen(port, () =>{
  console.log('servidor ok')
})
