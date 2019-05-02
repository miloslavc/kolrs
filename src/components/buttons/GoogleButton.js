import React, { useState } from "react";
import { firebase } from "../../firebase";
import styled from "@emotion/styled";

function GoogleButton() {
  const [authError, setAuthError] = useState(null);

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
    <>
      {authError && (
        <ErrorStyled>Unable to get profile information from Google</ErrorStyled>
      )}
      <ButtonStyled onClick={handleSignIn}>Sign in With Google</ButtonStyled>
    </>
  );
}

export default GoogleButton;

const ButtonStyled = styled.button`
  background: #fff;
  width: 100%;
  height: 60px;
  color: #666;
  font-size: 1em;
  border: 1px solid #666;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
`;

const ErrorStyled = styled.p`
  color: #ff4045;
  margin: 0;
  text-align: left;
  width: 100%;
  font-size: 0.8em;
  padding-bottom: 0.4em;
`;
