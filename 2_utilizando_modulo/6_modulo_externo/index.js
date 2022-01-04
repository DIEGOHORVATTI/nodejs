const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profisao = args['profisao']

console.log('nome:' + nome, 'profision:' + profisao)

