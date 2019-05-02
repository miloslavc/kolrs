import React, { useState } from "react";
import styled from "@emotion/styled";
import { firebase } from "../../firebase";

function Login(props) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [authError, setAuthError] = useState(null);

  //email
  const handleEmailSignIn = async e => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setAuthError(error);
    }
  };

  //google
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      setAuthError(error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSignIn}>Sign in With Google</button>
        <form onSubmit={handleEmailSignIn}>
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            required
          />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign in</button>
        </form>

        {authError && (
          <div>
            <p>Sorry there was a problem</p>
            <p>
              <i>{authError.message}</i>
            </p>
            <p>Please try again!</p>
          </div>
        )}
        <button onClick={props.handleClick}>Close</button>
      </div>
      <div onClick={props.handleClick} />
    </div>
  );
}

export default Login;
