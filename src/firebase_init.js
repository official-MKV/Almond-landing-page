// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyB3_EDt0mXgd8TfiUL2O0-KrB9ULs3fuUU",
  authDomain: "almond-landing-page.firebaseapp.com",
  projectId: "almond-landing-page",
  storageBucket: "almond-landing-page.appspot.com",
  messagingSenderId: "730291464739",
  appId: "1:730291464739:web:66bb67c42503dc79905f96",
  measurementId: "G-TLZK2C2QR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


