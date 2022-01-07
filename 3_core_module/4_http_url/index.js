const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

  const urlInfo = require('url').parse(req.url, true)
  const email = urlInfo.query.email

  res.statuscode = 200
  res.setHeader('contenty-Type', 'text/html')
  if(!email){
  	res.end(
    '<h3>prencha seu email</h3><form><input method="GET" name="email" type="text" /><button>Submit</button></form>'
  )
  }else{
  	res.end(`<h2>Email cadastrado ${email}</h2>`)
  }

})

server.listen(port, () =>{
  console.log('servidor ok')
})