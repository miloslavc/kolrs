import React from "react";
import styled from "@emotion/styled";
import { firebase } from "../../firebase";
import Logo from "../buttons/Logo";
import SignOutButton from "../buttons/SignOutButton";
import Avatar from "../user/Avatar";
import NewPaletteButton from "../buttons/NewPaletteButton";

const handleSignOut = () => {
  firebase.auth().signOut();
};
function Nav(props) {
  return (
    <HeaderStyled>
      <Logo color="#141414" />
      <NewPaletteButton />
      <Avatar user={props.user} />
      <SignOutButton handleSignOut={handleSignOut} />
    </HeaderStyled>
  );
}

export default Nav;

const HeaderStyled = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1em 0;
`;
