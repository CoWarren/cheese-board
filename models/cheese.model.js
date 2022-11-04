const { Datatypes, Model } = require('sequelize')
const db = require('../db/db') 

class Cheese extends Model{}

Cheese.init({
  title: {
    type: Datatypes.STRING
  },
  description: {
    type: Datatypes.STRING
  }
},{sequelize: db})

module.exports = Cheese