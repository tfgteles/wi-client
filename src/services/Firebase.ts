// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfcVd1Q86ehYrA9jPbTOhRbyTrXPX3wzA",
  authDomain: "firefat-5b99f.firebaseapp.com",
  databaseURL: "https://firefat-5b99f.firebaseio.com",
  projectId: "firefat-5b99f",
  storageBucket: "firefat-5b99f.appspot.com",
  messagingSenderId: "147632368023",
  appId: "1:147632368023:web:48f107ef6a9cf1d80e3cd2",
  measurementId: "G-GPG0K83R2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
