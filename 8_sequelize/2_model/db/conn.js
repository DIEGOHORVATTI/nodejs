const boxen = require('boxen')
const chalk = require('chalk')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sequelize', 'div', '20020000', {
  host: 'localhost',
  dialect: 'mysql',
})

/* try{
  sequelize.authenticate()
  console.log(
    boxen('Conectado ao sql|(sequelize)', {
      margin: 1,
      float: 'center',
      padding: 1,
      borderStyle: 'round',
      borderColor: 'green',
    })
  )
} catch(err){
  console.log(
    boxen(`Erro no sql|(conn.js): ${chalk.red(err)}`, {
      margin: 1,
      float: 'center',
      padding: 1,
      borderStyle: 'round',
      borderColor: 'green',
    })
  )
} */

module.exports = sequelize
