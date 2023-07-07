// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAE72PHp4MNlSTNdgkVAANlSyln0cJOBXU",
  authDomain: "fireship-project-9fb62.firebaseapp.com",
  projectId: "fireship-project-9fb62",
  storageBucket: "fireship-project-9fb62.appspot.com",
  messagingSenderId: "173064321672",
  appId: "1:173064321672:web:b85d0d333ae3f29fc17d3d",
  measurementId: "G-Y8H0NMCKVB"

};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();