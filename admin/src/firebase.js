
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyC3vweiujqox0HaZ35hDG9HQGoWni-L14g",
  authDomain: "adminu-a5b89.firebaseapp.com",
  projectId: "adminu-a5b89",
  storageBucket: "adminu-a5b89.appspot.com",
  messagingSenderId: "848198037879",
  appId: "1:848198037879:web:48f9febb2fbce934137172",
  measurementId: "G-KXV7P22Y5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;