import React from "react";
import logo from "../images/logo/logo40x40.svg";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

function Logo() {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoButton>
          <img src={logo} alt="Kolrs" />
          <p>beta</p>
        </LogoButton>
      </Link>
    </LogoWrapper>
  );
}

export default Logo;

const LogoWrapper = styled.div`
  margin-right: auto;
`;

const LogoButton = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  img {
    height: 100%;
    width: 35px;
  }
  p {
    font-size: 1.125em;
    /* color: #ff4045; */
    color: #141414;
    font-weight: bold;
    margin-left: 0.2em;
  }
`;
