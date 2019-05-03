import React, { useState } from "react";
import styled from "@emotion/styled";
import deleteIcon from "../images/deleteIcon.svg";
import deleteIconWhite from "../images/deleteIconWhite.svg";

function DeleteCardButton(props) {
  const [showButton, setShowButton] = useState(false);

  return (
    <ButtonStyled
      onClick={props.handleDelete}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {showButton === false && <img src={deleteIcon} alt="delete" />}
      {showButton === true && <img src={deleteIconWhite} alt="delete" />}{" "}
    </ButtonStyled>
  );
}

export default DeleteCardButton;

const ButtonStyled = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  img {
    width: 100%;
    svg {
      .cls-2 {
        fill: #000;
      }
    }
  }
`;
