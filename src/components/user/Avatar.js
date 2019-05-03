import React from "react";
import styled from "@emotion/styled";
import robot from "../images/robot35x35.svg";
function Avatar(props) {
  return (
    <User>
      {props.user.displayName ? (
        <p>{props.user.displayName.slice(0, 1).toUpperCase()}</p>
      ) : (
        <img src={robot} alt="user" />
      )}
    </User>
  );
}

export default Avatar;

const User = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #5120a9;
  width: 40px;
  height: 40px;
  margin-right: 1em;
  p {
    font-size: 1.125em;
    color: #fff;
    text-align: center;
  }
  img {
    height: 100%;
  }
`;
