export default function playerFactory(gameboard) {
  let position = null

  const selectPosition = (selection) => {
    position = selection
  }

  const selectCharacter = async (characterId) => {
    const correctCharacter = await gameboard.comparePositions(
      position,
      characterId
    )
    return correctCharacter
  }

  return { selectPosition, selectCharacter }
}
