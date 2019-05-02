import React, { useState } from "react";
import styled from "@emotion/styled";
import Nav from "../components/home/Nav";
import Login from "../components/home/Login";
import SignUp from "../components/home/SignUp";

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
      {toggleLogin ? <Login handleClick={handleLogin} /> : null}
      <main>
        <section>
          <h1>Kolrs</h1>
        </section>
      </main>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`;
