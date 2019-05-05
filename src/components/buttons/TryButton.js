import React from "react";
import styled from "@emotion/styled";

function TryButton(props) {
  return (
    <ButtonStyled onClick={props.handleSignUp}>Try Kolrs for free</ButtonStyled>
  );
}

export default TryButton;

const ButtonStyled = styled.button`
  background: #5120a9;
  padding: 1em 2.5em;
  height: 60px;
  color: #fff;
  font-size: 1.125em;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background: #3b187b;
  }
`;
