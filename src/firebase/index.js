
import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA5Pc8pVZoeIxrWVwuZmT1KbVpCd5l_iT4",
    authDomain: "iottemphumid-67c9b.firebaseapp.com",
    databaseURL: "https://iottemphumid-67c9b-default-rtdb.firebaseio.com",
    projectId: "iottemphumid-67c9b",
    storageBucket: "iottemphumid-67c9b.appspot.com",
    messagingSenderId: "928804380664",
    appId: "1:928804380664:web:485bbfb3dd1b6f3a1b800d",
    measurementId: "G-RX07XYMX32"
};

export const myFirebase = firebase.initializeApp(firebaseConfig)