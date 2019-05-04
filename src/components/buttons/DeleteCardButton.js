import React, { useState } from "react";
import styled from "@emotion/styled";

function DeleteCardButton(props) {
  const [showButton, setShowButton] = useState(false);

  return (
    <ButtonStyled
      onClick={props.handleDelete}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {showButton === false && (
        <svg width={30} height={30} viewBox="0 0 30 30">
          <defs>
            <style>
              {`.a{fill:none;stroke:${
                props.color
              };}.a,.b{stroke-width:2px;}.b,.d{fill:none;}.b{stroke:${
                props.color
              };stroke-linecap:round;stroke-linejoin:round;}.c{stroke:none;}`}
            </style>
          </defs>
          <g transform="translate(-4310 5033)">
            <g className="a" transform="translate(4310 -5033)">
              <circle className="c" cx={15} cy={15} r={15} />
              <circle className="d" cx={15} cy={15} r={14} />
            </g>
            <path
              className="b"
              d="M5,5,0,10,5,5,0,0,5,5l5-5L5,5l5,5Z"
              transform="translate(4320.5 -5022.5)"
            />
          </g>
        </svg>
      )}

      {showButton === true && (
        <svg width={30} height={30} viewBox="0 0 30 30">
          <defs>
            <style>
              {`.a{fill:${props.color};stroke:${
                props.color
              };}.a,.b{stroke-width:2px;}.b,.d{fill:none;}.b{stroke:${
                props.iconColor
              };stroke-linecap:round;stroke-linejoin:round;}.c{stroke:none;}`}
            </style>
          </defs>
          <g transform="translate(-4310 5033)">
            <g className="a" transform="translate(4310 -5033)">
              <circle className="c" cx={15} cy={15} r={15} />
              <circle className="d" cx={15} cy={15} r={14} />
            </g>
            <path
              className="b"
              d="M5,5,0,10,5,5,0,0,5,5l5-5L5,5l5,5Z"
              transform="translate(4320.5 -5022.5)"
            />
          </g>
        </svg>
      )}
    </ButtonStyled>
  );
}

export default DeleteCardButton;

const ButtonStyled = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  background: none;
  user-select: none;
  cursor: pointer;
`;
