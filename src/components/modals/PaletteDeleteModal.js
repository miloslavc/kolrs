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
    </Wrapper>
  );
}

export default PaletteDeleteModal;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;
