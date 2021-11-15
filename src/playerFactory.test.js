import playerFactory from './playerFactory'

test('selectCharacter should return false if no match', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(false),
  }

  const fakeRoundFactory = (startTime) => {
    return { calculateTime: (endtime) => 50000 }
  }

  const player = playerFactory(fakeGameboard, fakeRoundFactory)

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

  const fakeRoundFactory = (startTime) => {
    return { calculateTime: (endtime) => 50000 }
  }

  const player = playerFactory(fakeGameboard, fakeRoundFactory)

  const position = { x: 200, y: 200 }
  player.selectPosition(position)

  const characterId = '123'
  player.selectCharacter(characterId).then((selectedCharacter) => {
    expect(selectedCharacter).toBe(true)
  })
})

test('getRoundTime should return expected roundTime', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(true),
  }

  const fakeRoundFactory = (startTime) => {
    return { calculateTime: (endtime) => 50000 }
  }

  const player = playerFactory(fakeGameboard, fakeRoundFactory)

  const position = { x: 200, y: 200 }
  player.selectPosition(position)

  const characterId = '123'
  player.selectCharacter(characterId).then((selectedCharacter) => {
    expect(player.getRoundTime()).toBe(5000)
  })
})
