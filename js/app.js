// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBW0knZeKW3vDoepXBc8tixxT6Y6qm9XQ8",
  authDomain: "fitnesswithlara-3e11d.firebaseapp.com",
  databaseURL: "https://fitnesswithlara-3e11d-default-rtdb.firebaseio.com",
  projectId: "fitnesswithlara-3e11d",
  storageBucket: "fitnesswithlara-3e11d.appspot.com",
  messagingSenderId: "103698128111",
  appId: "1:103698128111:web:e55b8525dfd98d632f8f1a",
  measurementId: "G-LRRTMJLRXX"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);