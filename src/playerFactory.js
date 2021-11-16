export default function playerFactory(gameboard, roundFactory) {
  let position = null
  let roundTime = null

  const round = roundFactory(Date.now())

  const selectPosition = (selection) => {
    position = selection
  }

  const selectCharacter = async (characterId) => {
    const correctCharacter = await gameboard.comparePositions(
      position,
      characterId
    )

    if (gameboard.allCharactersFound()) {
      roundTime = round.calculateTime(Date.now())
    }

    return correctCharacter
  }

  const getRoundTime = () => {
    return roundTime
  }

  return { selectPosition, selectCharacter, getRoundTime }
}
