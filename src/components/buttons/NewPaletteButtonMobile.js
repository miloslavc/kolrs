import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

function NewPaletteButtonMobile() {
  return (
    <Button>
      <Link to="/new">
        <svg width={60} height={60} viewBox="0 0 60 60">
          <defs>
            <style>{".a{fill:#fff;}"}</style>
          </defs>
          <circle className="a" cx={30} cy={30} r={30} />
          <path
            d="M38.219,25.719H27.281V14.781a.781.781,0,0,0-1.562,0V25.719H14.781a.781.781,0,0,0,0,1.563H25.719V38.219a.781.781,0,0,0,1.563,0V27.281H38.219a.781.781,0,0,0,0-1.562Z"
            transform="translate(4 4)"
          />
        </svg>
      </Link>
    </Button>
  );
}

export default NewPaletteButtonMobile;

const Button = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  /* background: #fff; */
  position: fixed;
  bottom: 1.5em;
  left: 50%;
  transform: translate(-50%);
  /* display: grid;
  place-items: center; */
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3));

  /* a {
    color: #141414;
    font-size: 3em;
    user-select: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  } */

  @media (min-width: 900px) {
    display: none;
  }
`;
