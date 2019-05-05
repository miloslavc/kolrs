import React from "react";
import styled from "@emotion/styled";
import Logo from "../buttons/Logo";

function Nav(props) {
  return (
    <HeaderStyled>
      <Logo color="#fff" />
      <SignIn onClick={props.login}>Sign In </SignIn>
      <SignUp onClick={props.signUp}>Sign Up</SignUp>
    </HeaderStyled>
  );
}

export default Nav;

const HeaderStyled = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 1em 0;
`;

const SignIn = styled.button`
  border: none;
  outline: none;
  font-size: 1em;
  background: none;
  padding: 0 1.25rem;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  color: #666;
  &:hover {
    color: #fff;
  }
`;

const SignUp = styled.button`
  border: none;
  outline: none;
  font-size: 1em;
  background: #5120a9;
  padding: 0.5rem 2rem;
  user-select: none;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    background: #3b187b;
  }
`;
