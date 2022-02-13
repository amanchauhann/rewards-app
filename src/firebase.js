// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyZ4fjL4PsSv-ULKAqdqJrFDtvE01iz4o",
    authDomain: "rewards-35a31.firebaseapp.com",
    projectId: "rewards-35a31",
    storageBucket: "rewards-35a31.appspot.com",
    messagingSenderId: "374598489841",
    appId: "1:374598489841:web:822103c6ca23aa2d54bb50",
    measurementId: "G-GWW9Z9J1F7"
});

const db = firebaseApp.firestore();

export default db;