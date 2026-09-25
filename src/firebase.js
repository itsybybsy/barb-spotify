import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "YOUR_REAL_AIZA_KEY_HERE",
  authDomain: "spotify-5ede7.firebaseapp.com",
  projectId: "spotify-5ede7",
  storageBucket: "spotify-5ede7.appspot.com",
  messagingSenderId: "264151726732",
  appId: "1:264151726732:web:fc864ead06cd69b77a99a9",
  measurementId: "G-7L47B510W7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
