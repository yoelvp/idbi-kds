import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyD67cVUI73IveIOReFpfA5pkkfcQMt52W8',
  authDomain: 'challenge-idbi.firebaseapp.com',
  databaseURL: 'https://challenge-idbi-default-rtdb.firebaseio.com',
  projectId: 'challenge-idbi',
  storageBucket: 'challenge-idbi.appspot.com',
  messagingSenderId: '733400524452',
  appId: '1:733400524452:web:aabda38c4e7415be21a831'
}

const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
