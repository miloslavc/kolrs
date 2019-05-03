import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

function NewPaletteButton() {
  return (
    <Button>
      <Link to="/new">Create new palette</Link>
    </Button>
  );
}

export default NewPaletteButton;

const Button = styled.div`
  a {
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
    margin-right: 1em;
    &:hover {
      background: #3b187b;
    }
    &:visited {
      color: #fff;
    }
  }
`;
