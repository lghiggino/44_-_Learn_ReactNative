import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAzEHPZHoFW7P70G3JxPE7VL8hgPJzS9Fw",
    authDomain: "task-90e33.firebaseapp.com",
    projectId: "task-90e33",
    storageBucket: "task-90e33.appspot.com",
    messagingSenderId: "917391544870",
    appId: "1:917391544870:web:b2afff0a8662fa9f280ce7",
    measurementId: "G-WN47BF4FR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)
export default database