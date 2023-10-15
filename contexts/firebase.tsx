"use client";

import { FirebaseApp, initializeApp } from "firebase/app";
import { createContext, ReactNode } from "react";

const FirebaseContext = createContext<FirebaseApp | null>(null);
export { FirebaseContext }

export default function Firebase({children}: {children: ReactNode}) {
  const firebaseConfig = {
    apiKey: "AIzaSyAj9Rml1ibq8Vc5FJqXtf4MZcbZmHaVrJE",
    authDomain: "gt-onionrings.firebaseapp.com",
    projectId: "gt-onionrings",
    storageBucket: "gt-onionrings.appspot.com",
    messagingSenderId: "1059832520962",
    appId: "1:1059832520962:web:a2f46955cf9e98ba0b621b",
    measurementId: "G-ZVF0KP24BF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <FirebaseContext.Provider value={app}>
      { children }
    </FirebaseContext.Provider>
  )
}