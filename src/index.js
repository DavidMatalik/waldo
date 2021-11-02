import { app } from './firebaseApp'
import { getFirestore } from 'firebase/firestore/lite'

const db = getFirestore(app)