import React from "react";
import styled from "@emotion/styled";

function LoginButton() {
  return <ButtonStyled type="submit">Sign in</ButtonStyled>;
}

export default LoginButton;

const ButtonStyled = styled.button`
  background: #00e095;
  width: 100%;
  height: 60px;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
