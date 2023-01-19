// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_TIoh9AfsDODT9sVoiC--HPvLjcPLhiM",
  authDomain: "netkriss-4eb3d.firebaseapp.com",
  projectId: "netkriss-4eb3d",
  storageBucket: "netkriss-4eb3d.appspot.com",
  messagingSenderId: "507994128839",
  appId: "1:507994128839:web:eb4ad3405e6024d26c19e2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
