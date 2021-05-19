import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA__RO2hYsHR1hw2NA6KiCrKXBDz1ZJIjA",
    authDomain: "org-ldh.firebaseapp.com",
    projectId: "org-ldh",
    storageBucket: "org-ldh.appspot.com",
    messagingSenderId: "1022238414621",
    appId: "1:1022238414621:web:828dba867ddec59d2473f4",
    measurementId: "G-7VSLVKEC42"
};

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig)
    :
    firebase.app()

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }