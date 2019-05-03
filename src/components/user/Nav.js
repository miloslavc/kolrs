import React from "react";
import styled from "@emotion/styled";
import { firebase } from "../../firebase";
import { Link } from "@reach/router";
import logo from "../images/logo/logo40x40.svg";
import SignOut from "../buttons/SignOut";
import Avatar from "../user/Avatar";
import NewPaletteButton from "../buttons/NewPaletteButton";
const handleSignOut = () => {
  firebase.auth().signOut();
};
function Nav(props) {
  return (
    <HeaderStyled>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Kolrs" />
        </Link>
      </Logo>
      <NewPaletteButton />
      <Avatar user={props.user} />
      <SignOut handleSignOut={handleSignOut} />
    </HeaderStyled>
  );
}

export default Nav;

const Logo = styled.div`
  height: 40px;
  margin-right: auto;
  img {
    height: 100%;
  }
`;

const HeaderStyled = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1em 0;
`;
