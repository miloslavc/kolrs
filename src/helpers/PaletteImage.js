import React from "react";
import styled from "@emotion/styled";
import logo from "../components/images/logo/logo_02.png";
import tinycolor from "tinycolor2";

function ExportPalette({ name, colors }) {
  return (
    <Wrapper id="capture">
      <Header>
        <img src={logo} alt="Kolrs" />
        <h1>/ {name}</h1>
      </Header>
      <ColorWrapper>
        {colors.length > 0 &&
          colors.map(color => (
            <ColorCard
              key={color}
              color={color}
              textColor={tinycolor(color).isDark() ? "#fff" : "#141414"}
            >
              <h1>{color}</h1>
            </ColorCard>
          ))}
      </ColorWrapper>
      <Footer>
        <p>
          Made with <strong>Kolrs.co</strong>
        </p>
      </Footer>
    </Wrapper>
  );
}

export default ExportPalette;

const Wrapper = styled.div`
  height: 580px;
  max-width: 960px;
  width: 100%;
  padding: 1em;
  background: #fff;
  position: absolute;
  top: -100%;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

const ColorWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-auto-rows: 200px;
  align-content: center;
  justify-content: center;
`;

const ColorCard = styled.div`
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background: ${props => props.color};
  h1 {
    color: ${props => props.textColor};
    font-size: 1.125em;
    text-transform: uppercase;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  h1 {
    font-size: 1.5em;
    margin-left: 0.5rem;
  }
  img {
    width: 30px;
    display: block;
  }
`;

const Footer = styled.footer`
  font-size: 0.8em;
  color: #666;
  text-align: center;
`;
