import React, { useState } from "react";
import styled from "@emotion/styled";
import { firebase } from "../../firebase";

//assets
import GoogleButton from "../buttons/GoogleButton";
import { LoginButton } from "../../elements";
import { white, error } from "../../utilities";

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

  return (
    <Wrapper>
      <Modal>
        <GoogleButton />
        <p>or</p>
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
      </Modal>
      <Dimmed onClick={props.handleClick} />
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
  p {
    text-align: center;
    padding: 1.5em;
    margin: 0;
  }
`;

const Modal = styled.div`
  background: ${white};
  z-index: 10;
  padding: 2em;
  max-width: 400px;
  width: 100%;
  z-index: 98;
  border-radius: 5px;
`;

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -99;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 60px;
    color: #666;
    padding-left: 0.8em;
    margin-bottom: 0.8em;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
    outline: none;
    &:focus {
      border: 1px solid #00e095;
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