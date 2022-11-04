const { Board, User, Cheese } = require('../models')
const db = require('./db')

async function see(){
  await db.sync({
    force: true
  })
}

seed()