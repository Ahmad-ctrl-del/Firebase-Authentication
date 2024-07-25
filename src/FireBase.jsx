// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_YAH82OHhHNblWKJQM6WB_LP9MbfgEA",
  authDomain: "first-project-e1173.firebaseapp.com",
  projectId: "first-project-e1173",
  storageBucket: "first-project-e1173.appspot.com",
  messagingSenderId: "691941819310",
  appId: "1:691941819310:web:3e002bfa0aef03bc5efe3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth};