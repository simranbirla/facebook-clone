import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDckjdVYHMwdzg79c182S1eXzNIRhqSWoA",
  authDomain: "facebook-clone-ffbdc.firebaseapp.com",
  databaseURL: "https://facebook-clone-ffbdc.firebaseio.com",
  projectId: "facebook-clone-ffbdc",
  storageBucket: "facebook-clone-ffbdc.appspot.com",
  messagingSenderId: "548623135403",
  appId: "1:548623135403:web:bae388a4cbd11b1dcbbdee",
  measurementId: "G-TFL7HNMBE6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
