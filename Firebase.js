// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4XxFDPw-pTK5tJ8xASNMNh7DoZYU5MVw",
  authDomain: "signal-clone-315c5.firebaseapp.com",
  projectId: "signal-clone-315c5",
  storageBucket: "signal-clone-315c5.appspot.com",
  messagingSenderId: "1058761251883",
  appId: "1:1058761251883:web:dc22bdb0ddc838d459de6e"
};

// Initialize Firebase
let app;
if(firebase.apps.length===0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}

const db=app.firestore();
const auth=firebase.auth();

export {db,auth};