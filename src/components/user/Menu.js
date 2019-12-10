import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect, Link } from '@reach/router';
import { firebase } from '../../firebase';

function Menu() {
  const [redirect, setRedirect] = useState(false);

  const handleSignOut = () => {
    firebase.auth().signOut();
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <MenuStyled>
      <LinkWrapper>
        <Link to="account">Account</Link>
      </LinkWrapper>
      <Button onClick={handleSignOut}>Logout</Button>
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.div`
  position: fixed;
  right: 2rem;
  top: 4.5rem;
  padding: 1em;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(118, 118, 118, 0.2) 0 0 0 1px, rgba(0, 0, 0, 0.05) 0 2px 5px;
  z-index: 59;
  &::before {
    content: '';
    height: 20px;
    width: 20px;
    background: #000;
    opacity: 0.1;
    transform: rotate(45deg);
    position: absolute;
    top: -10px;
    margin-left: 1em;
  }
  &::after {
    content: '';
    height: 20px;
    width: 20px;
    background: #fff;
    transform: rotate(45deg);
    position: absolute;
    top: -9px;
    margin-left: 1em;
  }
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem;
  outline: none;
  font-size: 1.125em;
  background: none;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  color: #666;
  &:hover {
    color: #141414;
  }
`;

const LinkWrapper = styled.div`
  a {
    border: none;
    padding: 0.5rem;
    outline: none;
    font-size: 1.125em;
    background: none;
    user-select: none;
    cursor: pointer;
    font-weight: 600;
    color: #666;
    &:hover {
      color: #141414;
    }
  }
`;
