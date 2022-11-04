const { Board, User, Cheese } = require('../models')
const db = require('./db')

async function seed(){
  
  await db.sync({
    force: true
  })

  await Cheese.bulkCreate([
    {
      title: "Parmesan",
      description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste."
    }
  ])

}

seed()