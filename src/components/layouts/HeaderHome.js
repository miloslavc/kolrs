import React from 'react';
import styled from 'styled-components';

// assets
import { white } from '../../utils';
import { Logo, SignIn, SignUp } from '../../elements';

function HeaderHome({ signUp, login }) {
  return (
    <HeaderStyled>
      <Logo color={white} />
      <SignIn onClick={login}>Sign In</SignIn>
      <SignUp onClick={signUp}>Sign Up</SignUp>
    </HeaderStyled>
  );
}

export default HeaderHome;

const HeaderStyled = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 1em 0;
`;
