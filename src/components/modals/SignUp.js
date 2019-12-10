import React, { useState } from 'react';
import styled from 'styled-components';
import { firebase } from '../../firebase';

// assets
import GoogleButton from '../buttons/GoogleButton';
import { SignUpButton, TextButton, Modal, ModalBG } from '../../elements';
import { secondary, error, gray } from '../../utils';

function SignUp({ handleSignUp, handleLogin }) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [authError, setAuthError] = useState(null);

  // email
  const handleEmailSignUp = async e => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (errorMsg) {
      setAuthError(errorMsg);
    }
  };

  return (
    <Wrapper>
      <Modal>
        <GoogleButton />
        <P>or</P>
        <FormStyled onSubmit={handleEmailSignUp}>
          {authError
            ? authError.code === 'auth/invalid-email' && (
                <ErrorStyled>Incorrect email</ErrorStyled>
              )
            : null}
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            autoCapitalize="off"
            autoCorrect="off"
            required
          />
          {authError
            ? authError.code === 'auth/weak-password' && (
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
            autoCapitalize="off"
            autoCorrect="off"
            required
          />
          <SignUpButton type="submit">Create new Account</SignUpButton>
        </FormStyled>

        <TextButton>
          <p>Already have an account?</p>
          <span role="button" tabIndex="0" onClick={handleLogin}>
            Log in
          </span>
        </TextButton>
      </Modal>
      <ModalBG onClick={handleSignUp} />
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
      border: 1px solid ${secondary};
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
