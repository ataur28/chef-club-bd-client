// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc0AjwDKw6elCJbDUao0vfXRyPj4mkt44",
  authDomain: "chef-club-bd.firebaseapp.com",
  projectId: "chef-club-bd",
  storageBucket: "chef-club-bd.appspot.com",
  messagingSenderId: "611713668812",
  appId: "1:611713668812:web:9d076dcbbb2fdb2cec1469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;