import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwHj3lSJ5pWfNp2TH3EtH2B4Hxwa3bOgM",
  authDomain: "ecommerce-bbdd.firebaseapp.com",
  projectId: "ecommerce-bbdd",
  storageBucket: "ecommerce-bbdd.appspot.com",
  messagingSenderId: "891075430754",
  appId: "1:891075430754:web:059df3be4c7a9ac14f443b",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database;
