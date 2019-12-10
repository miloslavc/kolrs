import React from 'react';
import styled from 'styled-components';

function PaletteColorPreview({ colors, handleBackground }) {
  return (
    <Wrapper>
      {colors.slice(1).map(color => (
        <Color
          key={color}
          color={color}
          onClick={() => handleBackground(color)}
        />
      ))}
    </Wrapper>
  );
}

export default PaletteColorPreview;

const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  /* height: 80%; */
  z-index: 199;
  /* border: 2px solid red; */
`;

const Color = styled.div`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  margin: 3px;
  background: ${props => props.color};
  /* &:first-of-type {
    display: none;
  } */
`;
