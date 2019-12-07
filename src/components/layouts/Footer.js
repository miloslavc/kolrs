import React from 'react';
import styled from '@emotion/styled';

// assets
import { primary } from '../../utils';

function Footer() {
  return (
    <FooterStyled>
      <p>
        {' '}
        &copy; {new Date().getFullYear()}. All rights received. Made with
        <span role="img" aria-label="Heart">
          ♥
        </span>
        by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://miloslavc.com"
        >
          Miloslav Cvetkovic
        </a>
      </p>
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
  margin: 1.5rem;
  span,
  a {
    margin: 0.5em;
    color: ${primary};
  }
  a,
  a:visited {
    font-weight: bold;
  }
`;
