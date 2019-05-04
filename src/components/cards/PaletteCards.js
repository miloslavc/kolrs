import React, { useState } from "react";
import styled from "@emotion/styled";
import { db } from "../../firebase";
import { Link } from "@reach/router";
import tinycolor from "tinycolor2";
import ShowDeleteCardButton from "../buttons/ShowDeleteCardButton";

function PaletteCards(props) {
  const [showButton, setShowButton] = useState(false);
  const color = tinycolor(props.palette.colors[0]);

  const handleDelete = () => {
    const data = db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.id}`);
    data.delete();
  };

  return (
    <Wrapper
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <Link to={`/${props.palette.id}`}>
        <PaletteCardStyled
          color={props.palette.colors ? props.palette.colors[0] : "#fff"}
          textColor={color.isDark() ? "#fff" : "#141414"}
        >
          <h1>{props.palette.name}</h1>
          <p>{props.index + 1}</p>
        </PaletteCardStyled>
      </Link>
      {showButton && (
        <ShowDeleteCardButton
          color={color.isDark() ? "#fff" : "#141414"}
          textColor={props.palette.colors[0]}
          handleDelete={handleDelete}
        />
      )}
    </Wrapper>
  );
}

export default PaletteCards;

const Wrapper = styled.div`
  position: relative;
`;

const PaletteCardStyled = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.color};
  color: ${props => props.textColor};
  text-decoration: none;
  padding: 2.5em 1.5em;
  border-radius: 5px;
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
  position: relative;
  h1 {
    font-size: 2.5em;
    &::before {
      content: "";
      position: absolute;
      width: 50px;
      border-top: 3px solid ${props => props.textColor};
      top: 2rem;
    }
  }
  p {
    position: absolute;
    bottom: 1.5em;
    right: 2em;
  }
`;
