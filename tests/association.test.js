const { User, Cheese, Board } = require("../models")
const db = require("../db/db")

test('Test that board can be assigned to many users', async () => {

  const testUser = await User.create({
    name: 'bob',
    email: 'bob@builder.com'
  })
  const testBoard = await Board.create({
  type: 'Cheesiest Board',
  description: 'All the cheesiest cheeses with cheese',
  rating: 7})

  await testUser.addBoard(testBoard)
  const ub = await testUser.getBoards()

  expect(ub[0].id).toEqual(testBoard.id)

  await testUser.destroy()
  await testBoard.destroy()

})