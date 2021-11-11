import { app } from './firebaseApp.js'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite'

const db = getFirestore(app)

const loadCharacters = async () => {
  const characters = await getDocs(collection(db, 'characters'))
  const extractedCharacters = []

  characters.forEach(character => {
    extractedCharacters.push(character.data())
  })

  return extractedCharacters
}

const loadCharacterPosition = async (id) => {
  const docRef = doc(db, 'positions', id)
  const position = await getDoc(docRef)

  return position.data()
}

export { loadCharacters, loadCharacterPosition }
