import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYw8ja8jj7VbRWg1VL3QRnI4VqWCmQxQs",
  authDomain: "proyecto-final-react-eb301.firebaseapp.com",
  projectId: "proyecto-final-react-eb301",
  storageBucket: "proyecto-final-react-eb301.appspot.com",
  messagingSenderId: "395077113784",
  appId: "1:395077113784:web:ae2011f891169f1f9fa14d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;