import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import data from './images/data.json';

import { black } from '../utils';

function Loader() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Wrapper>
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </Wrapper>
  );
}

export default Loader;

const Wrapper = styled.div`
  pointer-events: none;
  min-height: 100vh;
  background: ${black};
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 2em;
  div {
    max-width: 600px;
  }
`;
