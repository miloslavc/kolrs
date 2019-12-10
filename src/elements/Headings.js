import styled from 'styled-components';
// import { css } from "styled-components";

export const CardH1 = styled.h1`
  font-size: 2.125em;
  font-weight: 500;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    border-top: 3px solid ${props => props.textColor};
    top: 2rem;
  }
`;

export const CardH2 = styled.h2`
  cursor: pointer;
  font-size: 1.55em;
  margin-bottom: 1.5rem;
  font-weight: 500;
  /* display: inline-block; */
`;

export const CardH3 = styled.h3`
  cursor: pointer;
  font-size: 1.125em;
  font-weight: 500;
  /* display: inline-block; */
`;
