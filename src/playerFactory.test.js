import playerFactory from './playerFactory'

test('selectCharacter should return false if no match', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(false),
  }

  const player = playerFactory(fakeGameboard)

  const position = { x: 100, y: 100 }
  player.selectPosition(position)

  const characterId = '123'
  player.selectCharacter(characterId).then((selectedCharacter) => {
    expect(selectedCharacter).toBe(false)
  })
})

test('selectCharacter should return true if match', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(true),
  }

  const player = playerFactory(fakeGameboard)

  const position = { x: 200, y: 200 }
  player.selectPosition(position)

  const characterId = '123'
  player.selectCharacter(characterId).then((selectedCharacter) => {
    expect(selectedCharacter).toBe(true)
  })
})
