// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0nJUnv1Kn33Vz92HhNKSQlYk8wEOu8AY",
  authDomain: "learning-management-syst-4c742.firebaseapp.com",
  projectId: "learning-management-syst-4c742",
  storageBucket: "learning-management-syst-4c742.firebasestorage.app",
  messagingSenderId: "285233933668",
  appId: "1:285233933668:web:f9585c765c32f0fb271e71",
  measurementId: "G-BVTVBLXDY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
