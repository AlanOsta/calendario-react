import firebase from "firebase/app"
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh70mjyOLIj4GwbEN7WCoQfcUuIrHBl8M",
    authDomain: "calendario-react.firebaseapp.com",
    projectId: "calendario-react",
    storageBucket: "calendario-react.appspot.com",
    messagingSenderId: "129127132080",
    appId: "1:129127132080:web:0f7a42e3805d5cc8f64475"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();