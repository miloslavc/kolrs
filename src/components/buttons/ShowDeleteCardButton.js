import React, { useState } from "react";
import styled from "@emotion/styled";
import PaletteDeleteModal from "../modals/PaletteDeleteModal";

function ShowDeleteCardButton(props) {
  const [modal, setModal] = useState(false);

  return (
    <div onClick={() => setModal(!modal)}>
      {modal === false && <ButtonStyledOpen color={props.color} />}
      {modal === true && <ButtonStyledClosed color={props.color} />}
      {modal && (
        <PaletteDeleteModal
          handleDelete={props.handleDelete}
          textColor={props.textColor}
          color={props.color}
        />
      )}
    </div>
  );
}

export default ShowDeleteCardButton;

const ButtonStyledOpen = styled.button`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  width: 30px;
  height: 30px;
  background: none;
  border: 3px solid ${props => props.color};
  outline: none;
  border-radius: 50%;
  user-select: none;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    border: 3px solid transparent;
    background: ${props => props.color};
  }
`;

const ButtonStyledClosed = styled.button`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  width: 30px;
  height: 30px;
  border: 3px solid transparent;
  background: ${props => props.color};
  outline: none;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
`;
