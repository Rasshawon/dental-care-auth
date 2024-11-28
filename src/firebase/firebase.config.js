// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUqstjPsu_5TuVWPuXW4J0HLt3c2BBRl0",
  authDomain: "dental-care-cf27b.firebaseapp.com",
  projectId: "dental-care-cf27b",
  storageBucket: "dental-care-cf27b.firebasestorage.app",
  messagingSenderId: "1098136044201",
  appId: "1:1098136044201:web:76ae3e86b5f6909d189fb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
