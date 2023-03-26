import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVXd5MGWxwjls7EoUSUUJIFJ2vHKzBlVk",
  authDomain: "chatgpt-message-clone.firebaseapp.com",
  projectId: "chatgpt-message-clone",
  storageBucket: "chatgpt-message-clone.appspot.com",
  messagingSenderId: "840304601466",
  appId: "1:840304601466:web:d3f1954ba774018395cec3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };