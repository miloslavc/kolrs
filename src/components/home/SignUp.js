import React, { useState } from "react";
import styled from "@emotion/styled";
import { firebase } from "../../firebase";
import GoogleSignIn from "../buttons/GoogleButton";
import SigUpButton from "../buttons/SignUpButton";

function SignUp(props) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [authError, setAuthError] = useState(null);

  //email
  const handleEmailSignUp = async e => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setAuthError(error);
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <Modal>
        <GoogleSignIn />
        <p>or</p>
        <FormStyled onSubmit={handleEmailSignUp}>
          {authError
            ? authError.code === "auth/invalid-email" && (
                <ErrorStyled>Incorrect email</ErrorStyled>
              )
            : null}
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            required
          />
          {authError
            ? authError.code === "auth/weak-password" && (
                <ErrorStyled>
                  Password should be at least 6 characters
                </ErrorStyled>
              )
            : null}
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
          <SigUpButton />
        </FormStyled>
      </Modal>
      <Dimmed onClick={props.handleClick} />
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
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
  background: #fff;
  z-index: 10;
  padding: 2em;
  max-width: 400px;
  width: 100%;
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
      border: 1px solid #5120a9;
    }
  }
`;

const ErrorStyled = styled.label`
  color: #ff4045;
  margin: 0;
  text-align: left;
  width: 100%;
  font-size: 0.8em;
  padding-bottom: 0.8em;
`;
