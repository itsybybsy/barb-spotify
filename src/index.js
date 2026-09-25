import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB81X6YmTAniTzm0PAgHbzj2W3ZP2OqiLk",
  authDomain: "spotify-5ede7.firebaseapp.com",
  projectId: "spotify-5ede7",
  storageBucket: "spotify-5ede7.appspot.com",
  messagingSenderId: "264151726732",
  appId: "1:264151726732:web:fc864ead06cd69b77a99a9",
  measurementId: "G-7L47B510W7",
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
