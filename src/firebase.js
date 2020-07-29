import * as firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAM_29pfB4hoqNQaoXhFXPPxJ3G2N5Y9_k",
    authDomain: "todolist-1dbd3.firebaseapp.com",
    databaseURL: "https://todolist-1dbd3.firebaseio.com",
    projectId: "todolist-1dbd3",
    storageBucket: "todolist-1dbd3.appspot.com",
    messagingSenderId: "813636903148",
    appId: "1:813636903148:web:70cea6e08a630ec63805c9",
    measurementId: "G-JB7DLE3MZ6"

});
const db= firebaseApp.firestore();
export default db;