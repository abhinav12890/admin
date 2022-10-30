import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCaMY7byeN86YxmML2pakk0pAPAq3KaeZ0",
  authDomain: "hosp-e8005.firebaseapp.com",
  projectId: "hosp-e8005",
  storageBucket: "hosp-e8005.appspot.com",
  messagingSenderId: "208226669693",
  appId: "1:208226669693:web:3c76529f5c3f75f2a54d14",
  measurementId: "G-BG9D2TVT38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);



