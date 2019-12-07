import styled from '@emotion/styled';
import { white } from '../utils';

export const Modal = styled.div`
  background: ${white};
  z-index: 10;
  padding: 2em;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -99;
`;
