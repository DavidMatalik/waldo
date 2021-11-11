export default function gameboardFactory(
  loadCharacters,
  loadCharacterPosition,
  characterFactory
) {
  const _characters = []
  const _radius = 50

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

  const getCharacters = () => _characters

  const _calculateDistance = (point1, point2) => {
    const xDistance = Math.abs(point1.x - point2.x)
    const yDistance = Math.abs(point1.y - point2.y)

    return Math.sqrt(xDistance ** 2 + yDistance ** 2)
  }

  const _setCharacterAsFound = (characterId) => {
    const character = _characters.find(
      (character) => character.getId() === characterId
    )
    character.markAsFound()
  }

  const comparePositions = async (userPosition, characterId) => {
    const characterPosition = await loadCharacterPosition(characterId)
    const distance = _calculateDistance(userPosition, characterPosition)

    const isMatch = distance <= _radius
    if (isMatch) _setCharacterAsFound(characterId)

    return isMatch
  }

  const allCharactersFound = () => {
    return _characters.every((character) => character.isFound())
  }

  return {
    createCharacters,
    getCharacters,
    comparePositions,
    allCharactersFound,
  }
}
