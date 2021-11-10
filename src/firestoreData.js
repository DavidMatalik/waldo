import { app } from './firebaseApp.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const db = getFirestore(app)

const loadCharacters = async () => {
  const characters = await getDocs(collection(db, 'characters'))
  const extractedCharacters = []

  characters.forEach(character => {
    extractedCharacters.push(character.data())
  })

  return extractedCharacters
}

export { loadCharacters }
