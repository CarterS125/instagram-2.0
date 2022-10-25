// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfIKXQr0TCVsXTglYEFBkePFeKQOQjT64",
  authDomain: "insta-2-24a39.firebaseapp.com",
  projectId: "insta-2-24a39",
  storageBucket: "insta-2-24a39.appspot.com",
  messagingSenderId: "1094841440758",
  appId: "1:1094841440758:web:c01750a7adf69e20210fd7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
