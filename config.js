import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB60uKmapmji7U4pRD2d3bUG7EnzZrFfgc",
  authDomain: "e-ride-9b474.firebaseapp.com",
  projectId: "e-ride-9b474",
  storageBucket: "e-ride-9b474.appspot.com",
  messagingSenderId: "612611805674",
  appId: "1:612611805674:web:90eea2f4096323ed69a293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);