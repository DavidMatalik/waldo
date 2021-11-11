export default function gameboardFactory(
  loadCharacters,
  loadCharacterPosition,
  characterFactory
) {
  const _characters = []

  const createCharacters = async () => {
    const charactersFromDb = await loadCharacters()
    charactersFromDb.forEach((characterFromDb) => {
      const character = characterFactory(
        characterFromDb.id,
        characterFromDb.name
      )
      _characters.push(character)
    })
  }

  const comparePositions = async (userPosition, characterId) => {
    const characterPosition = await loadCharacterPosition(characterId)
    return (
      userPosition.x === characterPosition.x &&
      userPosition.y === characterPosition.y
    )
  }

  const getCharacters = () => _characters

  return { createCharacters, getCharacters, comparePositions }
}
