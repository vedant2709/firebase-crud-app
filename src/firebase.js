import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYaw3-kd3nGnbHIGWSQGuKXSaM9gPPXiM",
  authDomain: "fir-app-ef073.firebaseapp.com",
  projectId: "fir-app-ef073",
  storageBucket: "fir-app-ef073.appspot.com",
  messagingSenderId: "980697290447",
  appId: "1:980697290447:web:a702b51443127b25f9c9ba"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);