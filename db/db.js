const { Sequelize } = require('sequelize')
const path = require('path')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'cheeseBoard'),
  logging: false
})

module.exports = db