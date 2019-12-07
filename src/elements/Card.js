/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

// assets
import { CardShadow } from '../utils';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.color};
  color: ${props => props.textColor};
  position: relative;
  padding: 2em 1.5em;
  border-radius: 5px;
  ${CardShadow};
`;
