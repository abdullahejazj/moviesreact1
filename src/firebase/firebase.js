import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJimSuch0htoh0yJryCzFGvMOp7ZwkFzs",
  authDomain: "movies-8db21.firebaseapp.com",
  databaseURL: "https://movies-8db21-default-rtdb.firebaseio.com",
  projectId: "movies-8db21",
  storageBucket: "movies-8db21.appspot.com",
  messagingSenderId: "166587477852",
  appId: "1:166587477852:web:af5a43cdd70463e30e5b99",
  measurementId: "G-8FESENGDT2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
