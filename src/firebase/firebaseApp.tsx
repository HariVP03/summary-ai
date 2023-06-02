// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ3ILEKdTSXiMXCGEaFBWcKe0lTMEDRm4",
  authDomain: "summarai-f1e55.firebaseapp.com",
  projectId: "summarai-f1e55",
  storageBucket: "summarai-f1e55.appspot.com",
  messagingSenderId: "1044192921887",
  appId: "1:1044192921887:web:f253296dfaf087c5ee082a",
  measurementId: "G-2LVCJJN2RT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}