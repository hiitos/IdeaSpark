// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getFunctions,connectFunctionsEmulator } from "firebase/functions";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const functions = getFunctions(firebaseApp);
export const auth = getAuth(firebaseApp);

const isEmulating = window.location.hostname === "localhost";
if (isEmulating) {
    const functions = getFunctions(firebaseApp);
    connectFunctionsEmulator(functions, "localhost", 5001);
//   useFunctionsEmulator("http://localhost:5001");
}