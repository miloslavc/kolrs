import React, { useState } from "react";
import { firebase } from "../../firebase";
import styled from "@emotion/styled";

//assets
import { GoogleSignInButton } from "../../elements";

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
        <Error>Unable to get profile information from Google</Error>
      )}
      <GoogleSignInButton onClick={handleSignIn}>
        Sign in With Google
      </GoogleSignInButton>
    </>
  );
}

export default GoogleButton;

const Error = styled.p`
  color: #ff4045;
  margin: 0;
  text-align: left;
  width: 100%;
  font-size: 0.8em;
  padding-bottom: 0.4em;
`;
