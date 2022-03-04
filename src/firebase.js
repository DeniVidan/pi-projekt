// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
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
initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
export {
  db,
  doc,
  addDoc,
  setDoc,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  updatePassword,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
};
