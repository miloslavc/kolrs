import React from "react";
import styled from "@emotion/styled";
import Kolrs from "../images/Kolrs.mp4";

function Video() {
  return (
    <VideoStyled>
      <video src={Kolrs} preload="auto" autoplay="" muted="" loop="" />
    </VideoStyled>
  );
}

export default Video;

const VideoStyled = styled.div`
  display: grid;
  align-items: center;
  justify-items: end;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  pointer-events: none;
  video {
    max-width: 100%;
  }
  @media (max-width: 1200px) {
    justify-items: center;
  }
  @media (max-width: 900px) {
    video {
      max-width: 90%;
    }
  }
`;
