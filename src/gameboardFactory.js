export default function gameboardFactory(loadCharacters, characterFactory) {
  const _characters = []

  const createCharacters = async () => {    
    const charactersFromDb = await loadCharacters()
    charactersFromDb.forEach((characterFromDb => {
      const character = characterFactory(characterFromDb.id, characterFromDb.name)
      _characters.push(character)
    }))
  }

  const getCharacters = () => _characters

  return { createCharacters, getCharacters }
}