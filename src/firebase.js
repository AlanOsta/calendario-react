import firebase from "firebase/app"
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEvh0C42_j8-_8kCh4t_h6mpLZ3ucqqWE",
    authDomain: "test-1e8b2.firebaseapp.com",
    databaseURL: "https://test-1e8b2.firebaseio.com",
    projectId: "test-1e8b2",
    storageBucket: "test-1e8b2.appspot.com",
    messagingSenderId: "790238599773",
    appId: "1:790238599773:web:575aa4f0980955f8d0cbb4"
    };
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
