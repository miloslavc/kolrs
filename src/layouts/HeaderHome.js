import React from "react";
import styled from "@emotion/styled";

//assets
import { SignIn, SignUp, Logo } from "../elements";
import { white } from "../utils";

function HeaderHome({ signUp, login }) {
  return (
    <HeaderStyled>
      <Logo color={white} />
      <SignIn onClick={login}>Sign In</SignIn>
      <SignUp onClick={signUp}>Sign Up</SignUp>
    </HeaderStyled>
  );
}

export default HeaderHome;

const HeaderStyled = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 1em 0;
`;
