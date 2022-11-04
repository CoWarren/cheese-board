const User = require("./user.model")
const Cheese = require("./cheese.model")
const Board = require("./board.model")

// one to many
User.hasMany(Board)
Board.belongsTo(User)

// Many to many 
Cheese.belongsToMany(Board,{through: 'Cheese_Board'})
Board.belongsToMany(Cheese,{through: 'Cheese_Board'})

module.exports = { User, Cheese, Board }