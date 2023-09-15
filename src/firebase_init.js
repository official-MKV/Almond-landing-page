// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBlEOcKybp54jvlTmZPPZ_7OBdJzayCYvM",
  authDomain: "almond-fc6ce.firebaseapp.com",
  projectId: "almond-fc6ce",
  storageBucket: "almond-fc6ce.appspot.com",
  messagingSenderId: "866639366917",
  appId: "1:866639366917:web:579126d4ddfd0b01a0856c",
  measurementId: "G-TJ45T3JD4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


