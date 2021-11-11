import { app } from './firebaseApp.js'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite'

const db = getFirestore(app)

const test = getDocs(collection(db, 'characters')).then(characters => {
  const extractedCharacters = []

  characters.forEach(character => {
    extractedCharacters.push(character.data())
  })

  return extractedCharacters
})

const loadPosition = async (id) => {
  const docRef = doc(db, 'positions', id)
  const position = await getDoc(docRef)

  console.log(position.data())
}

loadPosition('1vvmpolghE4PaqZptVH8')

console.log(test)
