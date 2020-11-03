import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/auth/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;