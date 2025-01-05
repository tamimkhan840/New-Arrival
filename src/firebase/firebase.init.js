// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-gUuaj0ceEIgcdn7-N81nR9P9-yZ9RyI",
  authDomain: "flash-5768c.firebaseapp.com",
  projectId: "flash-5768c",
  storageBucket: "flash-5768c.firebasestorage.app",
  messagingSenderId: "228024341086",
  appId: "1:228024341086:web:26a0bd55242424f2845acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}