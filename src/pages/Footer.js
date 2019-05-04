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
  position: fixed;
  bottom: 1em;
  right: 1em;
  font-size: 0.8em;
  span,
  a {
    margin: 0.2em;
    color: #5120a9;
  }
  a,
  a:visited {
    font-weight: bold;
  }
`;
