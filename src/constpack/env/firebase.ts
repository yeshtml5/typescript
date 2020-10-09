import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA6V3Hu0OPf7k_HA08W4SgDhB3vxTvtTdc',
  authDomain: 'yeshtml5-typescript.firebaseapp.com',
  databaseURL: 'https://yeshtml5-typescript.firebaseio.com',
  projectId: 'yeshtml5-typescript',
  storageBucket: 'yeshtml5-typescript.appspot.com',
  messagingSenderId: '104514429640',
  appId: '1:104514429640:web:b65c7e22b09bfb64edfbfd',
  measurementId: 'G-Z08STV8SC6'
}
// Initialize Firebase
export default firebase.initializeApp(FIREBASE_CONFIG)

export const authService = firebase.auth()
export const firebaseInstance = firebase
export const dbService = firebase.firestore()
