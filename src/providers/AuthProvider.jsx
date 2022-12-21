import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseProvider";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fbContext = useContext(FirebaseContext);
  const auth = fbContext.auth;

  useEffect(() => {
    console.log("fbcontext", fbContext);
    console.log("authP auth", auth);
    const unsub = onAuthStateChanged(auth, (authUser) => {
      console.log("onAuthStateChanged() - new User!!", authUser);
      setUser(authUser);
    });
    return unsub; // to shut down onAuthStateChanged listener
  }, [auth]);

  const login = async (email, password) => {
    try {
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred) {
        console.log("Logged in!!", userCred.user);
      } else {
        console.log("Login failed!");
      }
    } catch (ex) {
      console.log("AUTH FAILURE!", ex.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (ex) {
      console.log("logout failed", ex.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
