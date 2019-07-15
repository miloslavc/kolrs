import React, { useState } from "react";
import styled from "@emotion/styled";
import { firebase } from "../../firebase";

//assets
import GoogleButton from "../buttons/GoogleButton";
import { LoginButton, TextButton, Modal, ModalBG } from "../../elements";
import { error, gray, primary } from "../../utils";

//components
import ResetPassword from "./ResetPassword";

function Login({ handleSignUp, handleLogin }) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [authError, setAuthError] = useState(null);
  const [toggleResetPassword, setToggleResetPassword] = useState(false);

  //reset
  const handleResetToggle = () => {
    setToggleResetPassword(!toggleResetPassword);
  };

  //email
  const handleEmailSignIn = async e => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setAuthError(error);
    }
  };

  return (
    <Wrapper>
      {toggleResetPassword === true ? (
        <ResetPassword handleResetToggle={handleResetToggle} />
      ) : (
        <Modal>
          <GoogleButton />
          <P>or</P>
          <FormStyled onSubmit={handleEmailSignIn}>
            {authError
              ? authError.code === "auth/user-not-found" && (
                  <ErrorStyled>Incorrect email</ErrorStyled>
                )
              : null}
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              autoCapitalize="off"
              autoCorrect="off"
              type="text"
              placeholder="Email"
              required
            />
            {authError
              ? authError.code === "auth/wrong-password" && (
                  <ErrorStyled>Incorrect password</ErrorStyled>
                )
              : null}
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              autoCapitalize="off"
              autoCorrect="off"
              type="password"
              placeholder="Password"
              required
            />
            <LoginButton type="submit">Sign in</LoginButton>
          </FormStyled>
          <TextButton>
            <span onClick={handleResetToggle}>Forgot password?</span>
          </TextButton>
          <TextButton>
            <p>No account?</p>
            <span onClick={handleSignUp}>Create account</span>
          </TextButton>
        </Modal>
      )}
      <ModalBG onClick={handleLogin} />
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    width: 100%;
    height: 60px;
    color: #666;
    padding-left: 0.8em;
    margin-bottom: 0.8em;
    border-radius: 3px;
    border: 1px solid ${gray};
    outline: none;
    &:focus {
      border: 1px solid ${primary};
    }
  }
`;

const ErrorStyled = styled.label`
  color: ${error};
  margin: 0;
  text-align: left;
  width: 100%;
  font-size: 0.8em;
  padding-bottom: 0.8em;
`;

const P = styled.p`
  text-align: center;
  padding: 1.5em;
  margin: 0;
`;
