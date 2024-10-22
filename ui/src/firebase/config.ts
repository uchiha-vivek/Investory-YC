// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNMt03vN-pqHc1s6cxbl0oFdTdNrk5LuI",
  authDomain: "investory-yc.firebaseapp.com",
  projectId: "investory-yc",
  storageBucket: "investory-yc.appspot.com",
  messagingSenderId: "851249098436",
  appId: "1:851249098436:web:e84fd8e07e6eacd022e391",
  measurementId: "G-9ZSVJGZ0DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app