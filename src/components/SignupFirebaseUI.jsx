import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import "firebaseui/dist/firebaseui.css";
import { FirebaseContext } from "../providers/FirebaseProvider";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

function SignupFirebaseUI() {
  const { signInWithGoogle } = useContext(AuthContext);
  const firebaseContext = useContext(FirebaseContext);
  const auth = firebaseContext.auth;
  // const ui = authContext.ui;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Sign in with google
      </button>
    </div>
  );
}

export default SignupFirebaseUI;
