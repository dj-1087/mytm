import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/auth/AuthForm";

const Auth = (props) => {
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
      <AuthForm props={props}/>
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn" id='구글로그인'>
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn" id='깃허브로그인'>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;