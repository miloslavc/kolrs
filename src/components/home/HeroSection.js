import React from "react";
import styled from "@emotion/styled";
import TryButton from "../buttons/TryButton";
import Video from "../home/Video";

function HeroSection(props) {
  return (
    <SectionStyled>
      <HeroText>
        <h1>A better way to create and save you color palettes.</h1>
        <p>Create, collect, and organize colors all in one place..</p>
        <TryButton handleSignUp={props.handleSignUp} />
      </HeroText>
      <Video />
    </SectionStyled>
  );
}

export default HeroSection;

const SectionStyled = styled.section`
  height: calc(100vh - 72px);
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 1fr 1.7fr;
  max-width: 1200px;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4.125em;
    width: 100%;
    margin-bottom: 2.5rem;
    line-height: 1.1;
  }
  p {
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1.125em;
  }
`;
