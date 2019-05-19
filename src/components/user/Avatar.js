import React from "react";
import styled from "@emotion/styled";
import robot from "../images/robot35x35.svg";
function Avatar({ user, width, height }) {
  return (
    <User width={width ? width : "40px"} height={height ? height : "40px"}>
      {user.displayName ? (
        <p>{user.displayName.slice(0, 1).toUpperCase()}</p>
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
  width: ${props => props.width};
  height: ${props => props.height};
  margin-right: 1em;
  p {
    font-size: ${props => (props.width !== "40px" ? "2em" : "1.125em")};
    color: #fff;
    text-align: center;
  }
  img {
    height: 70%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
