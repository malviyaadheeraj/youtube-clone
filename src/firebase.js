import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD18r4E3Ef5CaCGfNJto3pWoWLxUCY3EFk",
  authDomain: "clone-a6851.firebaseapp.com",
  projectId: "clone-a6851",
  storageBucket: "clone-a6851.appspot.com",
  messagingSenderId: "744307086126",
  appId: "1:744307086126:web:89eca0038a2f4d5b3ca0bf",
  measurementId: "G-7XWRMYHR24",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
