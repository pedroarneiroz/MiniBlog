import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEc5aqhcTInll-nV5jOd9n2PJbN9op8IU",
    authDomain: "miniblog-8f92c.firebaseapp.com",
    projectId: "miniblog-8f92c",
    storageBucket: "miniblog-8f92c.firebasestorage.app",
    messagingSenderId: "387513983304",
    appId: "1:387513983304:web:d17cca064e6a0181d2d37d"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };