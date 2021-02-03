import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIuOn02y4ZOLTJvYnE-cW3KvA3wu9f7Hs",
  authDomain: "ecommerce-template-wolves.firebaseapp.com",
  projectId: "ecommerce-template-wolves",
  storageBucket: "ecommerce-template-wolves.appspot.com",
  messagingSenderId: "606173406808",
  appId: "1:606173406808:web:b9861193c3dd36240acc2d"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage()
export { db, auth, storage }
