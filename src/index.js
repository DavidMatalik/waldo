import { app } from './firebaseApp.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const db = getFirestore(app)

const test = getDocs(collection(db, 'characters')).then(characters => {
  const extractedCharacters = []

  characters.forEach(character => {
    extractedCharacters.push(character.data())
  })

  return extractedCharacters
})

console.log(test)
