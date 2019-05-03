import React from "react";
import styled from "@emotion/styled";

function SignOut(props) {
  return <Button onClick={props.handleSignOut}>Sign Out</Button>;
}

export default SignOut;

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 1em;
  background: none;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #5120a9;
  }
`;
