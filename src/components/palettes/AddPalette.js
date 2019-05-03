import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

function AddPalette() {
  return (
    <Wrapper>
      <Link to="/new">Create new palette</Link>
    </Wrapper>
  );
}

export default AddPalette;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 72px);
  a {
    font-size: 2em;
  }
`;
