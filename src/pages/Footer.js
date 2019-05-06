import React from "react";
import styled from "@emotion/styled";

function Footer() {
  return (
    <FooterStyled>
      Made with
      <span role="img" aria-label="Heart">
        ♥
      </span>
      by <a href="http://www.oblik.io">Miloslav Cvetkovic</a>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  color: #fff;
  background: #000;
  span,
  a {
    margin: 0.5em;
    color: #5120a9;
  }
  a,
  a:visited {
    font-weight: bold;
  }
  @media (min-width: 900px) {
    position: fixed;
    bottom: 1em;
    right: 1em;
  }
`;
