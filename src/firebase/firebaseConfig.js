import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCcH4po-zq-EE_80cgmH9Y86CXIhvU-8pE",
    authDomain: "brewvoyage-87047.firebaseapp.com",
    databaseURL: "https://brewvoyage-87047-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "brewvoyage-87047",
    storageBucket: "brewvoyage-87047.firebasestorage.app",
    messagingSenderId: "459512453086",
    appId: "1:459512453086:web:011fd17e0bae12208e2f4f"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };