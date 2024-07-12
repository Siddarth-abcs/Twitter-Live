// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

wrong config info

const firebaseConfig = {
  apiKey: "AIzteIZKnvkuuDi3Js",
  authDomain: "github-.fipp.com",
  projectId: "github-si",
  storageBucket: "github-wi.appspot.com",
  messagingSenderId: "102,
  appId: "1:1023424542464:wb532e55e2325e5",
  measurementId: "G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
