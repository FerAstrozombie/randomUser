import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1vUXB_MwYNJQbDU1P0jYrCf-HavVEDSc",
  authDomain: "coderhouse-ecommerce-14c1d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-14c1d",
  storageBucket: "coderhouse-ecommerce-14c1d.appspot.com",
  messagingSenderId: "357237821892",
  appId: "1:357237821892:web:65cfb30e5178adcd119491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
