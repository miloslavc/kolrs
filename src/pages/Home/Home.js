import React, { useState } from "react";
import styled from "@emotion/styled";

//layouts
import HeaderHome from "components/layouts/HeaderHome";
import Footer from "components/layouts/Footer";

//components
import Login from "components/modals/Login";
import SignUp from "components/modals/SignUp";

//assets
import { HeroButton } from "elements";
import KolrsVideo from "assets/video/Kolrs.mp4";
import { white, mq } from "utils";

function Home() {
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const handleSignUp = () => {
    setToggleSignUp(!toggleSignUp);
    setToggleLogin(false);
  };

  const handleLogin = () => {
    setToggleLogin(!toggleLogin);
    setToggleSignUp(false);
  };

  return (
    <Wrapper>
      <HeaderHome signUp={handleSignUp} login={handleLogin} />
      {toggleSignUp && (
        <SignUp handleSignUp={handleSignUp} handleLogin={handleLogin} />
      )}
      {toggleLogin && (
        <Login handleSignUp={handleSignUp} handleLogin={handleLogin} />
      )}
      <Content>
        <HeroText>
          <h1>A better way to create and save your color palettes.</h1>
          <p>Create, collect, and organize colors all in one place.</p>
          <HeroButton onClick={handleSignUp}>Try Kolrs for free</HeroButton>
        </HeroText>
        <VideoContent>
          <video src={KolrsVideo} preload="auto" autoplay="" muted="" loop="" />
        </VideoContent>
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Content = styled.main`
  display: grid;
  margin: 0 auto;
  max-width: 90%;
  align-items: center;
  grid-auto-rows: 70vh 1fr;
  grid-gap: 1em;

  ${mq[1]} {
    max-width: 80%;
  }

  ${mq[2]} {
    grid-gap: 2em;
    max-width: 80rem;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 2.5em;
    width: 100%;
    margin-bottom: 2.5rem;
    line-height: 1.1;
    color: ${white};
    font-weight: 500;
  }
  p {
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1.125em;
    color: ${white};
  }
  ${mq[0]} {
    h1 {
      font-size: 3.125em;
    }
  }
  ${mq[2]} {
    h1 {
      font-size: 4.5em;
    }
  }
`;

const VideoContent = styled.div`
  width: 100%;
  pointer-events: none;
  display:grid;
  place-items:center;
  padding: 3rem;

  video {
    max-width: 100%;
    border-radius: .5rem;
  }
`;
