import React, { useState } from "react";
import styled from "@emotion/styled";

//layouts
import HeaderHome from "../layouts/HeaderHome";
import Footer from "../layouts/Footer";

//components
import Login from "../components/modals/Login";
import SignUp from "../components/modals/SignUp";

//assets
import { HeroButton } from "../elements";
import KolrsVideo from "../components/images/Kolrs.mp4";
import { white, black, mq } from "../utilities";

function Home() {
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const handleSignUp = () => {
    setToggleSignUp(!toggleSignUp);
  };
  const handleLogin = () => {
    setToggleLogin(!toggleLogin);
  };

  return (
    <Wrapper>
      <HeaderHome signUp={handleSignUp} login={handleLogin} />
      {/* modals */}
      {toggleSignUp ? <SignUp handleClick={handleSignUp} /> : null}
      {toggleLogin ? (
        <Login signUp={handleSignUp} handleClick={handleLogin} />
      ) : null}
      {/* content */}
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
  background: ${black};
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Content = styled.main`
  display: grid;
  margin: 0 auto;
  max-width: 90%;
  align-items: center;
  grid-auto-rows: 1fr 1fr;
  grid-gap: 1em;

  ${mq[1]} {
    max-width: 80%;
  }

  ${mq[2]} {
    grid-template-columns: 1fr 1.8fr;
    grid-gap: 3em;
    max-width: 1350px;
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
    text-align: left;
    h1 {
      font-size: 3.7vw;
    }
  }
`;

const VideoContent = styled.div`
  width: 100%;
  pointer-events: none;
  video {
    max-width: 100%;
  }
`;
