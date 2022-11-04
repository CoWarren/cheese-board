const { Datatypes, Model } = require('sequelize')
const db = require('../db/db') 

class Board extends Model{}

Board.init({
  type: {
    type: Datatypes.STRING
  },
  description: {
    type: Datatypes.STRING
  }, 
  rating: {
    type: Datatypes.INTEGER
  }
},{sequelize: db})

module.exports = Board