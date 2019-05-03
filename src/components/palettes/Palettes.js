import React from "react";
import PaletteCards from "../cards/PaletteCards";
import styled from "@emotion/styled";

function Palettes(props) {
  return (
    <Wrapper>
      {props.palettes.map(palette => (
        <PaletteCards
          key={palette.id}
          user={props.user}
          palette={palette}
          id={palette.id}
        />
      ))}
    </Wrapper>
  );
}

export default Palettes;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
