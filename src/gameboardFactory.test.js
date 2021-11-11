import characterFactory from './characterFactory'
import gameboardFactory from './gameboardFactory'
import { jest } from '@jest/globals'

test('getCharacters should return an array with expected object', () => {
  const fakeLoadCharacters = jest.fn()
  fakeLoadCharacters.mockReturnValue(
    Promise.resolve([{ id: 213, name: 'Waldo' }])
  )

  const gameboard = gameboardFactory(fakeLoadCharacters, null, characterFactory)
  gameboard.createCharacters().then(() => {
    const characters = gameboard.getCharacters()
    expect(characters[0].getName()).toBe('Waldo')
  })
})

test('comparePositions should return true, if positions are equal', () => {
  const userPosition = { x: 100, y: 100 }
  const characterId = '123'

  const fakeLoadCharacterPosition = jest.fn()
  fakeLoadCharacterPosition.mockReturnValue(Promise.resolve({ x: 100, y: 100 }))

  const gameboard = gameboardFactory(
    null,
    fakeLoadCharacterPosition,
    characterFactory
  )

  gameboard
    .comparePositions(userPosition, characterId)
    .then((comparePositions) => {
      expect(comparePositions).toBe(true)
    })
})
