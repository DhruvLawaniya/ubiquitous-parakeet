// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCUbw3vZAD-g2-PPdpnCmLC1dnT_teXvj0",
    authDomain: "try-auth-8694f.firebaseapp.com",
    projectId: "try-auth-8694f",
    storageBucket: "try-auth-8694f.appspot.com",
    messagingSenderId: "711207143332",
    appId: "1:711207143332:web:e5d0031c352082b6896331",
    
    

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

