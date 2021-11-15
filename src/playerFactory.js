export default function playerFactory(gameboard, roundFactory) {
  let position = null
  const round = roundFactory(Date.now())

  const selectPosition = (selection) => {
    position = selection
  }

  const selectCharacter = async (characterId) => {
    const correctCharacter = await gameboard.comparePositions(
      position,
      characterId
    )

    if (correctCharacter) round.calculateTime(Date.now())

    return correctCharacter
  }

  const getRoundTime = () => {
    return 5000
  }

  return { selectPosition, selectCharacter, getRoundTime }
}
