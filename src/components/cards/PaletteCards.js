import React from "react";
import styled from "@emotion/styled";
import { db } from "../../firebase";
import { Link } from "@reach/router";
import { textColor } from "../../helpers/helpers";

function PaletteCards(props) {
  const handleDelete = () => {
    const data = db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.id}`);
    data.delete();
  };

  return (
    <Wrapper>
      <Link to={`/${props.palette.id}`}>
        <PaletteCardStyled
          color={props.palette.colors ? props.palette.colors[0] : "#fff"}
          textColor={textColor(props.palette.colors[0])}
        >
          <h1>{props.palette.name}</h1>
        </PaletteCardStyled>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </Wrapper>
  );
}

export default PaletteCards;

const Wrapper = styled.div``;

const PaletteCardStyled = styled.div`
  width: 200px;
  height: 300px;
  background: ${props => props.color};
  color: ${props => props.textColor};
  text-decoration: none;
  button {
    z-index: 999;
  }
`;
