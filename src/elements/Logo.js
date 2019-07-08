import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

//assets
import logo from "../components/images/logo/logo_02.png";

export function Logo(props) {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoButton color={props.color}>
          <img src={logo} alt="Kolrs" />
          <p>KOLRS</p>
        </LogoButton>
      </Link>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  margin-right: auto;
  cursor: pointer;
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
    font-size: 0.9em;
    color: ${props => props.color};
    font-weight: 500;
    margin-left: 0.2em;
  }
`;
