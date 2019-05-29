import React, { useState } from "react";
import styled from "@emotion/styled";
import { db } from "../../firebase";
import { Link } from "@reach/router";
import tinycolor from "tinycolor2";
import ShowDeleteCardButton from "../buttons/ShowDeleteCardButton";
import ColorDots from "../modals/ColorDots";

function PaletteCards(props) {
  const [showButton, setShowButton] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    props.palette.colors[0]
  );

  const handleBackground = color => {
    setBackgroundColor(color);
  };

  const handleDelete = () => {
    const data = db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.id}`);
    data.delete();
  };

  const color = tinycolor(backgroundColor);

  return (
    <Wrapper
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <PaletteCardStyled
        color={props.palette.colors.length !== 0 ? backgroundColor : "#141414"}
        textColor={color.isDark() ? "#fff" : "#141414"}
      >
        <LinkWrapper
          color={backgroundColor}
          textColor={color.isDark() ? "#fff" : "#141414"}
        >
          <Link to={`palette/${props.palette.id}`} />
        </LinkWrapper>
        <Title>{props.palette.name}</Title>
        <Number>{props.index + 1}</Number>
        <ColorDots
          colors={props.palette.colors}
          handleBackground={handleBackground}
        />
      </PaletteCardStyled>
      {showButton && (
        <ShowDeleteCardButton
          color={color.isDark() ? "#fff" : "#141414"}
          textColor={backgroundColor}
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
  padding: 2.5em 1.5em 1.5em;
  border-radius: 5px;
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 675px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    border-top: 3px solid ${props => props.textColor};
    top: 2rem;
  }
`;

const Number = styled.p`
  font-size: 1.125em;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
`;

const LinkWrapper = styled.div`
  a {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 900px) {
    a {
      background: ${props => props.color};
      height: 100px;
      width: 100px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid ${props => props.textColor};
    }
  }
`;
