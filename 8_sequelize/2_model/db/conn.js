const boxen = require('boxen')
const chalk = require('chalk')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sequelize', 'div', '20020000', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
