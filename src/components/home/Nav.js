import React from "react";
import { Link } from "@reach/router";
import logo from "../images/logo/logo40x40.svg";
import styled from "@emotion/styled";
function Nav(props) {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src={logo} alt="kolrs" />
      </Link>
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

  a {
    display: flex;
    align-items: center;
    margin-right: auto;
    img {
      max-height: 40px;
    }
  }
`;

const SignIn = styled.button`
  border: none;
  outline: none;
  font-size: 1em;
  background: none;
  padding: 0 1em;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #5120a9;
  }
`;

const SignUp = styled.button`
  border: none;
  outline: none;
  font-size: 1em;
  background: #5120a9;
  padding: 0.625em 2em;
  user-select: none;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    background: #3b187b;
  }
`;
