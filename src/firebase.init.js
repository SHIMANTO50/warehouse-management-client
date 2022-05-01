// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4HGOEXVDqFCDq-X311-Xu28NwVPOnzPA",
    authDomain: "warehouse-6c633.firebaseapp.com",
    projectId: "warehouse-6c633",
    storageBucket: "warehouse-6c633.appspot.com",
    messagingSenderId: "837238363312",
    appId: "1:837238363312:web:b7917c49087a1b9edad775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;