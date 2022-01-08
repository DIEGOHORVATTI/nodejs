const path = require('path')

//path absoluto
console.log(path.resolve("arquivo.txt"))

//formar path
const midFolder = "relatorios"
const fileName = "arquivos.txt"

const finalPath = path.join("/", 'arquivos', fileName)

console.log(finalPath)