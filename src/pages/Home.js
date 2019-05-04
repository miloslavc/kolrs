import React, { useState } from "react";
import styled from "@emotion/styled";
import Nav from "../components/home/Nav";
import Login from "../components/home/Login";
import SignUp from "../components/home/SignUp";
import HeroSection from "../components/home/HeroSection";
import Footer from "../pages/Footer";
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
      <Nav signUp={handleSignUp} login={handleLogin} />
      {toggleSignUp ? <SignUp handleClick={handleSignUp} /> : null}
      {toggleLogin ? (
        <Login signUp={handleSignUp} handleClick={handleLogin} />
      ) : null}
      <main>
        <HeroSection handleSignUp={handleSignUp} />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`;
