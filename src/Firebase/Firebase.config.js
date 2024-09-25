// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAen4pjLes44LaLfFiU-CTbGyelCXrhyMU",
  authDomain: "portfolio-4c747.firebaseapp.com",
  databaseURL: "https://portfolio-4c747-default-rtdb.firebaseio.com",
  projectId: "portfolio-4c747",
  storageBucket: "portfolio-4c747.appspot.com",
  messagingSenderId: "988765677788",
  appId: "1:988765677788:web:50536994bda21a18556c19",
  measurementId: "G-2DQ7J1RGKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
