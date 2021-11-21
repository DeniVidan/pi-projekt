// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_um34cDU6K8lpQHIrsrY3ERvPIk4QQkI",
  authDomain: "majstor-87485.firebaseapp.com",
  projectId: "majstor-87485",
  storageBucket: "majstor-87485.appspot.com",
  messagingSenderId: "833463173733",
  appId: "1:833463173733:web:be8608eae56b09ad35bc8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
