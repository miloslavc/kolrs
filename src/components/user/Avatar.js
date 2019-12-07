import React, { useContext } from 'react';
import styled from '@emotion/styled';
import robot from 'assets/icons/robot35x35.svg';
import { UserContext } from '../../context/UserContext';

// assets
import { primary } from '../../utils';

function Avatar({ width, height }) {
  const { user } = useContext(UserContext);

  return (
    <User width={width || '30px'} height={height || '30px'}>
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
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  background: ${primary};
  width: ${props => props.width};
  height: ${props => props.height};
  p {
    font-size: ${props => (props.width !== '30px' ? '2em' : '1em')};
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
