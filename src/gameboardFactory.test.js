import characterFactory from './characterFactory'
import gameboardFactory from './gameboardFactory'
import { jest } from '@jest/globals'

describe('all tests in here need same fakeLoadCharacters', () => {
  let fakeLoadCharacters = null

  beforeEach(() => {
    fakeLoadCharacters = jest.fn()
    fakeLoadCharacters.mockReturnValue(
      Promise.resolve([{ id: '123', name: 'Waldo' }])
    )
  })

  test('getCharacters should return an array with expected object', () => {
    const gameboard = gameboardFactory(
      fakeLoadCharacters,
      null,
      characterFactory
    )
    gameboard.createCharacters().then(() => {
      const characters = gameboard.getCharacters()
      expect(characters[0].getName()).toBe('Waldo')
    })
  })

  describe('all tests in here need same fakeLoadCharacterPosition', () => {
    let fakeLoadCharacterPosition = null
    let gameboard = null

    beforeEach(() => {
      fakeLoadCharacterPosition = jest.fn()
      fakeLoadCharacterPosition.mockReturnValue(
        Promise.resolve({ x: 100, y: 100 })
      )

      gameboard = gameboardFactory(
        fakeLoadCharacters,
        fakeLoadCharacterPosition,
        characterFactory
      )
    })

    test('comparePositions should return true, if positions are equal', () => {
      const userPosition = { x: 100, y: 100 }
      const characterId = '123'
      gameboard.createCharacters().then(() => {
        gameboard
          .comparePositions(userPosition, characterId)
          .then((comparePositions) => {
            expect(comparePositions).toBe(true)
          })
      })
    })

    test('comparePositions should return true, if positions are nearly equal', () => {
      const userPosition = { x: 110, y: 100 }
      const characterId = '123'
      gameboard.createCharacters().then(() => {
        gameboard
          .comparePositions(userPosition, characterId)
          .then((comparePositions) => {
            expect(comparePositions).toBe(true)
          })
      })
    })

    test('comparePositions should return false, if positions are too far away', () => {
      const userPosition = { x: 200, y: 200 }
      const characterId = '123'
      gameboard.createCharacters().then(() => {
        gameboard
          .comparePositions(userPosition, characterId)
          .then((comparePositions) => {
            expect(comparePositions).toBe(false)
          })
      })
    })

    test('allCharactersFound should return true, if one character found', () => {
      const userPosition = { x: 100, y: 100 }
      const characterId = '123'

      gameboard.createCharacters().then(() => {
        gameboard.comparePositions(userPosition, characterId).then(() => {
          expect(gameboard.allCharactersFound()).toBe(true)
        })
      })
    })

    test('allCharactersFound should return false, if one character missing', () => {
      const userPosition = { x: 100, y: 100 }
      const characterId = '123'

      gameboard.createCharacters().then(() => {
        expect(gameboard.allCharactersFound()).toBe(false)
      })
    })
  })
})

test('allCharactersFound should return true for multiple characters', () => {
  const fakeLoadCharacters = jest.fn()
  fakeLoadCharacters.mockReturnValue(
    Promise.resolve([
      { id: '123', name: 'Waldo' },
      { id: '456', name: 'Granny' },
    ])
  )

  const fakeLoadCharacterPosition = jest.fn()
  fakeLoadCharacterPosition
    .mockReturnValueOnce(Promise.resolve({ x: 100, y: 100 }))
    .mockReturnValueOnce(Promise.resolve({ x: 500, y: 500 }))

  const gameboard = gameboardFactory(
    fakeLoadCharacters,
    fakeLoadCharacterPosition,
    characterFactory
  )

  const userPositionWaldo = { x: 100, y: 100 }
  const characterIdWaldo = '123'

  const userPositionGranny = { x: 500, y: 500 }
  const characterIdGranny = '456'

  gameboard.createCharacters().then(() => {
    gameboard.comparePositions(userPositionWaldo, characterIdWaldo).then(() => {
      gameboard
        .comparePositions(userPositionGranny, characterIdGranny)
        .then(() => {
          expect(gameboard.allCharactersFound()).toBe(true)
        })
    })
  })
})
