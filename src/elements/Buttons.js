import styled from "@emotion/styled";
import { css } from "@emotion/core";

//mixins
import { white, primary, black, mq } from "../utilities";

//home
export const HeroButton = styled.button`
  background: ${primary};
  background-image: linear-gradient(90deg, #5120a9 20%, #ff0082 100%);
  padding: 1em 2.5em;
  height: 60px;
  color: ${white};
  font-size: 1.125em;
  border: none;
  outline: none;
  border-radius: 50px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  ${mq[2]} {
    align-self: flex-start;
  }
`;

//singin buttons
const button = css`
  width: 100%;
  height: 60px;
  font-size: 1em;
  border: none;
  outline: none;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export const SignUpButton = styled.button`
  ${button}
  background: ${primary};
  color: ${white};
`;

export const LoginButton = styled.button`
  ${button}
  background: #00e095;
  color: ${white};
`;

export const GoogleSignInButton = styled.button`
  ${button}
  background: ${white};
  color: #666;
  border: 1px solid #666;
  &:hover {
    background: #efefef;
  }
`;

//header
const headerButton = css`
  border: none;
  outline: none;
  font-size: 1em;
  user-select: none;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

export const SignIn = styled.button`
  ${headerButton}
  background:none;
  color: #666;
  margin-right: 1em;
  &:hover {
    color: ${white};
  }
`;

export const SignUp = styled.button`
  ${headerButton}
  color: ${white};
  background: ${primary};
  border-radius: 50px;
  padding: 0.3rem 1.5rem;
`;

export const AppButton = styled.button`
  background: ${white};
  border-radius: 50px;
  width: 60%;
  height: 40px;
  outline: none;
  border: 1px solid ${black};
  cursor: pointer;
  padding: 0 4em;
  span {
    font-size: 1.125em;
    color: ${black};
  }

  &:hover {
    background: ${black};
    border: 1px solid transparent;
    span {
      font-size: 1.125em;
      color: ${white};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  outline: none;
  border: none;
  background: ${black};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: grid;
  align-items: center;
  justify-items: center;
  span {
    color: ${white};
    padding: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;
