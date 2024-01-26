// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  //apiKey: "",
  authDomain: "homelandestates-49271.firebaseapp.com",
  projectId: "homelandestates-49271",
  storageBucket: "homelandestates-49271.appspot.com",
  messagingSenderId: "785521061316",
  appId: "1:785521061316:web:ab448a7f273fa7886f0891"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

