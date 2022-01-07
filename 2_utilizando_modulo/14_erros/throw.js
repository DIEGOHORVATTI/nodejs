const x = "10"

// checar se x é inteiro
if(!Number.isInteger(x)){
  throw new Error("O valor de x tem que ser número inteiro")
}

console.log('fim')
