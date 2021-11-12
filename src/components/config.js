import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBYxqSM5TdRItDbBV3BcaXtLsJsQ96hX6Q",
  authDomain: "autoform-a6f3b.firebaseapp.com",
  databaseURL: "https://autoform-a6f3b-default-rtdb.firebaseio.com",
  projectId: "autoform-a6f3b",
  storageBucket: "autoform-a6f3b.appspot.com",
  messagingSenderId: "924908023838",
  appId: "1:924908023838:web:69305e3da31339e20abe0f",
  measurementId: "G-YS881F7H04"
});

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const storage = firebaseapp.storage();

export { db, auth, storage };