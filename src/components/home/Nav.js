import React from "react";
import { Link } from "@reach/router";

function Nav(props) {
  return (
    <header>
      <Link to="/">
        <span>Kolrs</span>
      </Link>
      <button onClick={props.login}>Sign In </button>
      <button onClick={props.signUp}>Sign Up</button>
    </header>
  );
}

export default Nav;
