import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8w3mjrN4_5hbZDyJla0W3HA1ZS2ufblw",
  authDomain: "waldo-6b4b5.firebaseapp.com",
  projectId: "waldo-6b4b5",
  storageBucket: "waldo-6b4b5.appspot.com",
  messagingSenderId: "1034535590931",
  appId: "1:1034535590931:web:284e45fed8a60bd0f173e6"
}

export const app = initializeApp(firebaseConfig)