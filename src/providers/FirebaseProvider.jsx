import React, { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgHe90O8DH-Dxkeqi_Q3mlb8aLhzFCWd4",
  authDomain: "c9-firebaseintroduction.firebaseapp.com",
  projectId: "c9-firebaseintroduction",
  storageBucket: "c9-firebaseintroduction.appspot.com",
  messagingSenderId: "619287684344",
  appId: "1:619287684344:web:adc7760fe04de98749070d",
  measurementId: "G-JHHC4SERKR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const store = getStorage(firebaseApp);

// const analytics = getAnalytics(firebaseApp);
console.log("auth", auth);
console.log("app:", firebaseApp);
export const FirebaseContext = createContext();

const theValues = { firebaseApp, auth, db, store };

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
