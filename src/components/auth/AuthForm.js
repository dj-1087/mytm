import React, { useState } from "react";
import { authService } from "fbase";

const inputStyles = {};

const AuthForm = ({props}) => {
  const {history} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    if(!newAccount) {
      history.push("/");
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
    {console.log(props)}
      <form onSubmit={onSubmit} className="container">
        <input
          id='이메일'
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        /><br />
        <input
          id='비번'
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          className="authInput"
          onChange={onChange}
        />
        <input
          id='로그인확인'
          type="submit"
          className="authInput authSubmit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Sign In" : "Create Account"}
      </span>
    </>
  );
};
export default AuthForm;