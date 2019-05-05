import React, { useState } from "react";
import styled from "@emotion/styled";
import { db } from "../../firebase";
import { Link } from "@reach/router";
import tinycolor from "tinycolor2";
import ShowDeleteCardButton from "../buttons/ShowDeleteCardButton";
import ColorDots from "../modals/ColorDots";

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
      <PaletteCardStyled
        color={props.palette.colors ? props.palette.colors[0] : "#fff"}
        textColor={color.isDark() ? "#fff" : "#141414"}
      >
        <LinkWrapper color={props.palette.colors[0]}>
          <Link to={`/${props.palette.id}`} />
        </LinkWrapper>
        <Title>{props.palette.name}</Title>
        <Number>{props.index + 1}</Number>
        <ColorDots colors={props.palette.colors} />
      </PaletteCardStyled>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2.5em;
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
  right: 2rem;
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
      filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.3));
      animation-duration: 1s;
      animation-name: open;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.03, 0.45, 0.58, 0.27);
      animation-direction: alternate;
      @keyframes open {
        from {
          width: 50px;
          height: 50px;
          /* filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3)); */
        }

        to {
          width: 100px;
          height: 100px;
          /* filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.3)); */
        }
      }
    }
  }
`;
