// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAetoZgZOyBPhscDyudteIZKnvkuuDi3Js",
  authDomain: "github-websi.firebaseapp.com",
  projectId: "github-websi",
  storageBucket: "github-websi.appspot.com",
  messagingSenderId: "1023424542464",
  appId: "1:1023424542464:web:5de70055b532e55e2325e5",
  measurementId: "G-CNGW915LJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
