import characterFactory from './characterFactory'
import gameboardFactory from './gameboardFactory'
import { jest } from '@jest/globals'

test('getCharacters should return an array with expected object', () => {
  const fakeLoadCharacters = jest.fn()
  fakeLoadCharacters.mockReturnValue(Promise.resolve([{id: 213, name: 'Waldo'}]))

  const gameboard = gameboardFactory(fakeLoadCharacters, characterFactory)
  gameboard.createCharacters().then(() => {
    const characters = gameboard.getCharacters()
    expect(characters[0].getName()).toBe('Waldo')
  })
})
