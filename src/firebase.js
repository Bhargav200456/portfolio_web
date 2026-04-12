import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEbBUsqJpKPtAzz5XAKQ2JrvE-ZP5rSn0",
  authDomain: "portfolio-57bf0.firebaseapp.com",
  projectId: "portfolio-57bf0",
  storageBucket: "portfolio-57bf0.firebasestorage.app",
  messagingSenderId: "764154762218",
  appId: "1:764154762218:web:40ca0b2dab0e68ff25d893"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);