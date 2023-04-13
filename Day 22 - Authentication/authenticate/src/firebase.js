// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGP9TaSVwe1_Jm5jAgTGPBjMO2F_JiHVU",
  authDomain: "day22reactauthentication.firebaseapp.com",
  projectId: "day22reactauthentication",
  storageBucket: "day22reactauthentication.appspot.com",
  messagingSenderId: "579812705585",
  appId: "1:579812705585:web:3d265249558118a7b41c10",
  measurementId: "G-TF79G60JLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
