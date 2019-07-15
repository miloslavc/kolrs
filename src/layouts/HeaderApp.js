import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

//assets
import { Logo, MenuIcon } from "../elements";
import { white, black } from "../utils";

//components
import Avatar from "../components/user/Avatar";
import Menu from "../components/user/Menu";

function HeaderApp() {
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

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderStyled>
      <nav ref={node}>
        <Logo color={white} />
        <Avatar />
        <span onClick={handleClick}>
          <MenuIcon />
        </span>
        {showMenu && <Menu />}
      </nav>
    </HeaderStyled>
  );
}

export default HeaderApp;

const HeaderStyled = styled.header`
  box-shadow: 0 1px rgba(118, 118, 118, 0.2);
  background: ${black};
  nav {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0.5em 0;
    color: ${white};
  }
`;
