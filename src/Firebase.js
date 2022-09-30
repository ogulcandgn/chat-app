// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYjLip2kJKwttSXeR26FaQoYBwCpPWmUo",
  authDomain: "chat-app-3d8ac.firebaseapp.com",
  projectId: "chat-app-3d8ac",
  storageBucket: "chat-app-3d8ac.appspot.com",
  messagingSenderId: "113107902075",
  appId: "1:113107902075:web:30bb50f121506c4e254cde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
