const fs = require('fs')

console.log('inicio')

fs.writeFile('./arquivo.txt', 'ola', function(err) {
  setTimeout(function(){
  console.log('Arquivo criado')
  }, 5000)
})

console.log('Fim')
