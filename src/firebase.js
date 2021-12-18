// import firebase from 'firebase'
// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA9z6KOkAXfkA3OC8aJ2OVhmZyOGJbGGbQ",
    authDomain: "my-netflix-clone-30bd2.firebaseapp.com",
    projectId: "my-netflix-clone-30bd2",
    storageBucket: "my-netflix-clone-30bd2.appspot.com",
    messagingSenderId: "774217937328",
    appId: "1:774217937328:web:28a407e27b4ec864666675",
    measurementId: "G-JP0J2MJJ1G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;