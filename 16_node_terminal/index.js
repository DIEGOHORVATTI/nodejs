//obrigatório para funcionar 
require('@babel/register')({
  presets: [['@babel/preset-env'], ['@babel/preset-react']],
})

//importar paginas
require('./dashboard')
