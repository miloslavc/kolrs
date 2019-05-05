import React from "react";
import PaletteCards from "../cards/PaletteCards";
import styled from "@emotion/styled";
import NewPaletteButtonMobile from "../buttons/NewPaletteButtonMobile";

function Palettes(props) {
  return (
    <Wrapper>
      {props.palettes.map((palette, index) => (
        <PaletteCards
          key={palette.id}
          user={props.user}
          palette={palette}
          id={palette.id}
          index={index}
        />
      ))}
      <NewPaletteButtonMobile />
    </Wrapper>
  );
}

export default Palettes;

const Wrapper = styled.main`
  display: grid;
  width: 90%;
  margin: 2em auto;
  grid-auto-flow: row;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 450px;
`;
