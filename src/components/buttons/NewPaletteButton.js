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
    color: #666;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1em;
    padding: 0.5rem 1rem;
    user-select: none;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: #000;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
