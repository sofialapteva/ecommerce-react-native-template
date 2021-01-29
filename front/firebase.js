import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/firestore";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4v9TjUSFFPxjFhQV3rafhjYjBbvTilXs",
  authDomain: "constructor-of-internet-shop.firebaseapp.com",
  projectId: "constructor-of-internet-shop",
  storageBucket: "constructor-of-internet-shop.appspot.com",
  messagingSenderId: "1001010159481",
  appId: "1:1001010159481:web:7c90912bc65076a37cd9a8"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }
