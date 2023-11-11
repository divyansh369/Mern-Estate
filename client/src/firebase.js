// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_URL,
  authDomain: "mern-estate-80fc3.firebaseapp.com",
  projectId: "mern-estate-80fc3",
  storageBucket: "mern-estate-80fc3.appspot.com",
  messagingSenderId: "3053521160",
  appId: "1:3053521160:web:3c2c0f6b416482588384bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);