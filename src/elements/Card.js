import styled from "@emotion/styled";
// import { css } from "@emotion/core";

//assets
import { CardShadow } from "../utilities";

//mixins

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
