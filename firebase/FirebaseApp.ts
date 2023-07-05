// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtn1hkwH44_6tW_vsk4sTxXzHpSO5cwBY",
  authDomain: "my-web-app-5f7a8.firebaseapp.com",
  projectId: "my-web-app-5f7a8",
  storageBucket: "my-web-app-5f7a8.appspot.com",
  messagingSenderId: "484021360227",
  appId: "1:484021360227:web:147fc5fd5d09bbfc718a56",
  measurementId: "G-1W7G9R79CN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
};