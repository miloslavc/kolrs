import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Logo from "../buttons/Logo";
import Avatar from "../user/Avatar";
import NewPaletteButton from "../buttons/NewPaletteButton";
import ArrowButton from "../buttons/ArrowButton";
import Menu from "./Menu";

function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);
  const node = useRef();

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <HeaderStyled>
      <nav ref={node}>
        <Logo color="#767676" />
        <NewPaletteButton />
        <Avatar user={props.user} />
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <ArrowButton />
        </MenuButton>
        {showMenu && <Menu />}
      </nav>
    </HeaderStyled>
  );
}

export default Nav;

const HeaderStyled = styled.header`
  box-shadow: rgba(118, 118, 118, 0.2) 0 1px;
  nav {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 1em 0;
  }
`;

const MenuButton = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
