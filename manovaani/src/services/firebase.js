
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase , ref , push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQeTqA8c7ChSL3ky2LBbhxbqCPA_et80k",
    authDomain: "manovaani-bf5fd.firebaseapp.com",
    projectId: "manovaani-bf5fd",
    storageBucket: "manovaani-bf5fd.firebasestorage.app",
    messagingSenderId: "104911376845",
    appId: "1:104911376845:web:7181cb81a759e0bbf77484",
    measurementId: "G-G63HRXR7E7"
  }; 

const app = initializeApp(appSettings);
const auth = getAuth();
const firestore = getFirestore(app);

