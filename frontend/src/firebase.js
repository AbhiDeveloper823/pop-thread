import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7XXcvORKKa1baWw6d2JQFozv6x4HgtzQ",
    authDomain: "pop-threads.firebaseapp.com",
    projectId: "pop-threads",
    storageBucket: "pop-threads.appspot.com",
    messagingSenderId: "623199221227",
    appId: "1:623199221227:web:7152ae23091f32badb15ae",
    measurementId: "G-2H30PQHC20"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()