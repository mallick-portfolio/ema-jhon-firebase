// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5yGescOB3bQB1oMGraL0mttb8umgivo",
  authDomain: "ema-jhon-firebase-de3c1.firebaseapp.com",
  projectId: "ema-jhon-firebase-de3c1",
  storageBucket: "ema-jhon-firebase-de3c1.appspot.com",
  messagingSenderId: "254264216120",
  appId: "1:254264216120:web:32e53ae18333367c4af4cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth