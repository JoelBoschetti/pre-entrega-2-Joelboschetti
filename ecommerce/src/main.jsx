import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUquAMHVh3Kvn1Iv-5SNjtkEOXm47CFMc",
  authDomain: "jjoel-store.firebaseapp.com",
  projectId: "jjoel-store",
  storageBucket: "jjoel-store.appspot.com",
  messagingSenderId: "303516536850",
  appId: "1:303516536850:web:376f4372bc81b1c43708cb",
  measurementId: "G-71QQ6636R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
