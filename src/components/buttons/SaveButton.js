import React from "react";
import styled from "@emotion/styled";

function SaveButton() {
  return <ButtonStyled type="submit">Save</ButtonStyled>;
}

export default SaveButton;

const ButtonStyled = styled.button`
  background: #00e095;
  width: 100%;
  height: 60px;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  outline: none;
  justify-self: flex-end;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
