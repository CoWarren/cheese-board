const db = require('../db/db')
const { User, Cheese, Board } = require('../models')

describe('Testing if model data is created within models', () => {
  beforeAll(async () => await db.sync({ force: true }))
  afterAll(async () => await db.sync({ force: true }))

  test('Testing the User model', async() => {
    const testUser = await User.create({
      name: 'wawa',
      email: 'wawa@gmail.com'
    })
   expect(testUser).toEqual(expect.objectContaining({name: 'wawa', email: 'wawa@gmail.com'}))
   await testUser.destroy()
  });

  test('Testing the Cheese model', async() => {
    const testCheese = await Cheese.create({
      title: 'Stink Bomb',
      description: 'smelly cheese'
    })
   expect(testCheese).toEqual(expect.objectContaining({title: 'Stink Bomb', description: 'smelly cheese'}))
   await testCheese.destroy()
  });

  test('Testing the Board model', async() => {
    const testBoard = await Board.create({
      type: 'Smelly board',
      description: 'Smelly board with smelly cheese',
      rating: 4
    })
   expect(testBoard).toEqual(expect.objectContaining({type: 'Smelly board', description: 'Smelly board with smelly cheese', rating: 4}))
   await testBoard.destroy()
  });
 
})