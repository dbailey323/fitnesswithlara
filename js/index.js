import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBW0knZeKW3vDoepXBc8tixxT6Y6qm9XQ8",
    authDomain: "fitnesswithlara-3e11d.firebaseapp.com",
    projectId: "fitnesswithlara-3e11d",
    storageBucket: "fitnesswithlara-3e11d.appspot.com",
    messagingSenderId: "103698128111",
    appId: "1:103698128111:web:e55b8525dfd98d632f8f1a",
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const classRef = firebase.firestore().collection('Classes');

  classRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
      }));
      console.log("All data in 'class' collection", data);
  })

