import firebase from 'firebase'

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaoHga8oQwEvj7y_b_lOcHr_8nHJfairQ",
    authDomain: "todo-app-ea022.firebaseapp.com",
    projectId: "todo-app-ea022",
    storageBucket: "todo-app-ea022.appspot.com",
    messagingSenderId: "833902035760",
    appId: "1:833902035760:web:963a9e129a4fd2b473bef5",
    measurementId: "G-7N83RP5N3S"
});

let db = firebaseApp.firestore();

export default db;