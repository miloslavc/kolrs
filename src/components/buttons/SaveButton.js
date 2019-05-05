import React from "react";
import styled from "@emotion/styled";

function SaveButton() {
  return <ButtonStyled type="submit">Save</ButtonStyled>;
}

export default SaveButton;

const ButtonStyled = styled.button`
  background: #141414;
  width: 100px;
  height: 100px;
  color: #00e095;
  font-size: 1.125em;
  border: none;
  border-radius: 50%;
  outline: none;
  justify-self: flex-end;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.2));
  }
`;
