import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDdI4poYAap9DRDkM1bu4f_HDJnGmaVRms",
  authDomain: "book-library-axios.firebaseapp.com",
  databaseURL: "https://book-library-axios-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "book-library-axios",
  storageBucket: "book-library-axios.appspot.com",
  messagingSenderId: "287105561257",
  appId: "1:287105561257:web:738f43211725b40531efb8"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbURL = "https://book-library-axios-default-rtdb.europe-west1.firebasedatabase.app"; 


export { db,dbURL };
