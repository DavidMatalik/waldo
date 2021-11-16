import playerFactory from './playerFactory'

let player = null

async function setupPlayer(fakeGameboard) {
  const fakeRoundFactory = (startTime) => {
    return { calculateTime: (endtime) => 50000 }
  }

  player = playerFactory(fakeGameboard, fakeRoundFactory)

  const position = { x: 100, y: 100 }
  player.selectPosition(position)

  const characterId = '123'
  return await player.selectCharacter(characterId)
}

test('selectCharacter should return false if no match', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(false),
    allCharactersFound: () => false,
  }

  setupPlayer(fakeGameboard).then((selectedCharacter) => {
    expect(selectedCharacter).toBe(false)
  })
})

test('selectCharacter should return true if match', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(true),
    allCharactersFound: () => true,
  }

  setupPlayer(fakeGameboard).then((selectedCharacter) => {
    expect(selectedCharacter).toBe(true)
  })
})

test('getRoundTime should return expected roundTime', () => {
  const fakeGameboard = {
    comparePositions: (position, characterId) => Promise.resolve(true),
    allCharactersFound: () => true,
  }

  setupPlayer(fakeGameboard).then(() => {
    expect(player.getRoundTime()).toBe(50000)
  })
})
