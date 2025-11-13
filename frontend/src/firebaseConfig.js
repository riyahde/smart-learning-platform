import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nJUnv1Kn33Vz92HhNKSQlYk8wEOu8AY",
  authDomain: "learning-management-syst-4c742.firebaseapp.com",
  projectId: "learning-management-syst-4c742",
  storageBucket: "learning-management-syst-4c742.appspot.com",
  messagingSenderId: "285233933668",
  appId: "1:285233933668:web:f9585c765c32f0fb271e71",
  measurementId: "G-BVTVBLXDY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

