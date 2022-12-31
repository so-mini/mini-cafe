
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgD2gcFRcmaX8esA8YJHBNgt3dReHJev0",
    authDomain: "mini-cafe-4527f.firebaseapp.com",
    projectId: "mini-cafe-4527f",
    storageBucket: "mini-cafe-4527f.appspot.com",
    messagingSenderId: "875624271413",
    appId: "1:875624271413:web:9f2862476c21d95c576b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}