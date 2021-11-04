import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
     apiKey: "AIzaSyBYxqSM5TdRItDbBV3BcaXtLsJsQ96hX6Q",
   authDomain: "autoform-a6f3b.firebaseapp.com",
   databaseURL: "https://autoform-a6f3b-default-rtdb.firebaseio.com",
   projectId: "autoform-a6f3b",
   storageBucket: "autoform-a6f3b.appspot.com",
   messagingSenderId: "924908023838",
   appId: "1:924908023838:web:3a52781e3f0c04b00abe0f",
   measurementId: "G-VNS10SE7XG"
});
const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

