import React from "react";
import styled from "@emotion/styled";

function SignOutButton(props) {
  return <Button onClick={props.handleSignOut}>Sign Out</Button>;
}

export default SignOutButton;

const Button = styled.button`
  border: 2px solid #5120a9;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  outline: none;
  font-size: 1em;
  background: none;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  color: #666;
  &:hover {
    color: #141414;
  }
`;
