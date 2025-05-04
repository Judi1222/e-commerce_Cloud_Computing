import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'; // Missing this line

// Your Firebase config (get this from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCjuOeH4KoFqyqEpQbZ9G4Z-BayOeTagmY",
    authDomain: "e-commerce-cloud-fcb25.firebaseapp.com",
    projectId: "e-commerce-cloud-fcb25",
    storageBucket: "e-commerce-cloud-fcb25.firebasestorage.app",
    messagingSenderId: "954829768279",
    appId: "1:954829768279:web:56620a0e132428bdd8c512",
    measurementId: "G-MXP5SL9RME"
  };

  

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Firestore
export { app, db, auth };