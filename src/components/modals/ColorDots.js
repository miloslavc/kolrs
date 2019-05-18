import React from "react";
import styled from "@emotion/styled";

function ColorDots(props) {
  return (
    <Wrapper>
      {props.colors.map(color => (
        <Color
          key={color}
          color={color}
          onClick={() => props.handleBackground(color)}
        />
      ))}
    </Wrapper>
  );
}

export default ColorDots;

const Wrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap-reverse;
  height: 80%;
  z-index: 49;
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin: 1px;
  background: ${props => props.color};
  /* &:first-of-type {
    display: none;
  } */
`;
