import React from "react";
import Lottie from "react-lottie";
import data from "../components/images/data.json";
import styled from "@emotion/styled";

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
      <Lottie options={defaultOptions} />
    </Wrapper>
  );
}

export default Loader;

const Wrapper = styled.div`
  pointer-events: none;
  max-height: 100vh;
  overflow: hidden;
`;
