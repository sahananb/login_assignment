import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfsBKdAaIW7C1-CHE3JLBtiC9kU1xdHy4",
  authDomain: "loginassignment-49951.firebaseapp.com",
  projectId: "loginassignment-49951",
  storageBucket: "loginassignment-49951.firebasestorage.app",
  messagingSenderId: "623987961815",
  appId: "1:623987961815:web:8987c3b4a638359dcb2592",
  measurementId: "G-E1GVRDMF56"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("No user is signed in.");
    }
  });

