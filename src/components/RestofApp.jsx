import React, { useContext } from "react";
import { useState } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";
import reactLogo from "../assets/react.svg";
import { AuthContext } from "../providers/AuthProvider";
import LoginForm from "./LoginForm";
import HeroesList from "./HeroesList";
import AddHeroForm from "./AddHeroForm";

export function RestofApp() {
  const fbContext = useContext(FirebaseContext);
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  return (
    <>
      <div className="App">
        {user ? "you are logged in!" : "not logged in!"}
      </div>
      <LoginForm />
      <HeroesList />
      <AddHeroForm />
    </>
  );
}
