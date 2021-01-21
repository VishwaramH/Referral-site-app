import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBgYFJ9IWz533HMyoXv_UlzsBkAdXCjjM0",
  authDomain: "referral-site-c7770.firebaseapp.com",
  projectId: "referral-site-c7770",
  storageBucket: "referral-site-c7770.appspot.com",
  messagingSenderId: "322920047259",
  appId: "1:322920047259:web:b4e8be4a3e79f7f51a5c3e",
  measurementId: "G-3GSXH5CVST"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;