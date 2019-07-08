import React, { useState } from "react";
import styled from "@emotion/styled";

//assets
import { FiX, FiCheck } from "react-icons/fi";
import { blackText, white } from "../../utilities";

function DeleteButton({ handleDelete, textColor }) {
  const [showDelete, setShowDelete] = useState(false);

  const handleLeave = () => {
    if (showDelete) {
      setShowDelete(false);
    }
    return;
  };

  return (
    <DeleteContainer
      showDelete={showDelete}
      textColor={textColor}
      onMouseLeave={handleLeave}
    >
      {showDelete && (
        <IconWrapper
          className="active"
          onClick={handleDelete}
          textColor={textColor}
        >
          <FiCheck />
        </IconWrapper>
      )}
      <IconWrapper
        onClick={() => {
          setShowDelete(!showDelete);
        }}
        textColor={textColor}
      >
        <FiX />
      </IconWrapper>
    </DeleteContainer>
  );
}

export default DeleteButton;
const IconContainer = styled.div`
  height: 40px;
  /* border-radius: 50px; */
  /* background: rgba(255, 255, 255, 1); */
  display: flex;
  align-items: center;
  justify-content: center;
  .active {
    /* border: 3px solid ${props => props.color}; */
    /* background: black; */

    &:hover{
background: ${({ textColor }) => textColor};
color: ${({ textColor }) => (textColor === white ? blackText : white)}
    }
  }
`;

const DeleteContainer = styled(IconContainer)`
  width: ${({ showDelete }) => (showDelete ? "80px" : "40px")};
`;

const IconWrapper = styled.span`
  width: 40px;
  height: 100%;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  /* background: rgba(255, 255, 255, 1); */
  &:hover {
    cursor: pointer;
  }
  /* font-size: 1.125em; */
  font-size: 1.25em;
  color: ${({ textColor }) => textColor};
`;
