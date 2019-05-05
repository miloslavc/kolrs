import React from "react";
import styled from "@emotion/styled";

function PaletteDeleteModal(props) {
  return (
    <Wrapper>
      <Delete
        onClick={props.handleDelete}
        color={props.color}
        textColor={props.textColor}
      >
        Delete
      </Delete>
      <Background />
    </Wrapper>
  );
}

export default PaletteDeleteModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Delete = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  font-size: 1.125em;
  background: ${props => props.color};
  color: ${props => props.textColor};
  z-index: 99;
  /* animation-duration: 0.2s;
  animation-name: open;

  @keyframes open {
    from {
      width: 0;
      height: 0;
    }

    to {
      width: 100px;
      height: 100px;
    }
  } */
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: ${props => props.color};
`;
