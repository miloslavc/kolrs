/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { firebase } from '../../firebase';

// assets
import { LoginButton, TextButton } from '../../elements';
import { white, error, gray } from '../../utils';

function ResetPassword({ handleResetToggle }) {
  const [authError, setAuthError] = useState(null);
  const [email, setEmail] = useState();

  // reset
  const handlePasswordReset = async e => {
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (errorMsg) {
      setAuthError(errorMsg);
    }
  };

  return (
    <Modal>
      <Title>Need a link to reset your password?</Title>
      <FormStyled onSubmit={handlePasswordReset}>
        {authError
          ? authError.code === 'auth/user-not-found' && (
              <ErrorStyled>
                There is no user record corresponding to this email.
              </ErrorStyled>
            )
          : null}
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          autoCapitalize="off"
          autoCorrect="off"
          type="email"
          placeholder="Email"
          required
        />
        <ButtonWrapper>
          <TextButton>
            <span onClick={handleResetToggle}>Just kidding, I remembered</span>
          </TextButton>
          <LoginButton type="submit">Reset Password</LoginButton>
        </ButtonWrapper>
      </FormStyled>
    </Modal>
  );
}

export default ResetPassword;

const Modal = styled.div`
  background: ${white};
  z-index: 10;
  padding: 2em;
  max-width: 400px;
  width: 100%;
  z-index: 98;
  border-radius: 5px;
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
    border: 1px solid ${gray};
    outline: none;
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

const Title = styled.p`
  text-align: left;
  padding: 1em;
  padding-left: 0;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  width: 100%;
  align-items: center;
  /* justify-items: center; */

  div {
    text-align: left;
    margin: 0;
  }
`;
