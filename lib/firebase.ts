// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1tb_OXuEJmhWB3f-0F4HADD11uqafCY0",
  authDomain: "memory-reboot-c82fd.firebaseapp.com",
  projectId: "memory-reboot-c82fd",
  storageBucket: "memory-reboot-c82fd.appspot.com",
  messagingSenderId: "916060872106",
  appId: "1:916060872106:web:090fa5425bee378a9edfd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
// export const db = firebase.firestore();
provider.setCustomParameters({ prompt: "select_account" });