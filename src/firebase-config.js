import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoigKZteuvdDdsvnQPI09yWxi6IcYSIYc",
  authDomain: "fir-tut-2b88a.firebaseapp.com",
  projectId: "fir-tut-2b88a",
  storageBucket: "fir-tut-2b88a.appspot.com",
  messagingSenderId: "364043792311",
  appId: "1:364043792311:web:17853a1b127e6b72b48232",
  measurementId: "G-CD5B62JXED",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
