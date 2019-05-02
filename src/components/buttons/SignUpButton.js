import React from "react";
import styled from "@emotion/styled";

function LoginButton() {
  return <ButtonStyled type="submit">Create new Account</ButtonStyled>;
}

export default LoginButton;

const ButtonStyled = styled.button`
  background: #5120a9;
  width: 100%;
  height: 60px;
  color: #fff;
  font-size: 1em;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #3b187b;
  }
`;
