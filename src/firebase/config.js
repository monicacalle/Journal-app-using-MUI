// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmVKPCvOpmFu8JMrQcf_Oo7QYS-70ermU",
  authDomain: "journal-app-3f222.firebaseapp.com",
  projectId: "journal-app-3f222",
  storageBucket: "journal-app-3f222.appspot.com",
  messagingSenderId: "1001877139322",
  appId: "1:1001877139322:web:26bd838b8d05889f8a30c3",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
