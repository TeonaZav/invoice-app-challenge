import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaPZ2AQsMfmaRXJaIdFwBd0UNf2dAvv0M",
  authDomain: "invoice-app-20932.firebaseapp.com",
  projectId: "invoice-app-20932",
  storageBucket: "invoice-app-20932.appspot.com",
  messagingSenderId: "682754871271",
  appId: "1:682754871271:web:5cd2a2e374020d074a3742",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
