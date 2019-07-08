import React from "react";
import Lottie from "react-lottie";
import data from "../components/images/data.json";
import styled from "@emotion/styled";

import { black } from "../utilities";

function Loader() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
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
