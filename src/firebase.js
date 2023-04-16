// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2YE1NTun_DUevZfT_uTEQWqMD5dONWDE",
    authDomain: "challenge-63fd6.firebaseapp.com",
    projectId: "challenge-63fd6",
    storageBucket: "challenge-63fd6.appspot.com",
    messagingSenderId: "933108596666",
    appId: "1:933108596666:web:0e9c0736bac2f90fed6783",
    measurementId: "G-KLGKCW1ZZ1"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db,auth };