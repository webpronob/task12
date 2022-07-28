// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0WV88IcAovJh8vMic_ttlvbtGC8KnJ0o",
    authDomain: "job-task-ee2f0.firebaseapp.com",
    projectId: "job-task-ee2f0",
    storageBucket: "job-task-ee2f0.appspot.com",
    messagingSenderId: "113644897592",
    appId: "1:113644897592:web:7d9c609616144b95c9edcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;