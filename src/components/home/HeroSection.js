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
  @media (max-width: 1300px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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
    color: #fff;
  }
  p {
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1.125em;
    color: #fff;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 3em;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
    grid-row: 2;
    h1 {
      font-size: 1.625em;
      width: 75%;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1em;
      width: 80%;
    }
    button {
      align-self: center;
      font-size: 1em;
    }
  }
`;