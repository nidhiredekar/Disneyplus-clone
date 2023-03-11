import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB_whJ5rFTCOikuqZakCFPyXIaTqYyOrgk",
  authDomain: "disneyplus-4d113.firebaseapp.com",
  projectId: "disneyplus-4d113",
  storageBucket: "disneyplus-4d113.appspot.com",
  messagingSenderId: "358221547826",
  appId: "1:358221547826:web:be3056a10a27cb1b24ef2b",
  measurementId: "G-0KSKB9L36B"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider, storage};
export default db;