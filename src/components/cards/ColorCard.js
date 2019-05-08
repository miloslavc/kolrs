import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { db, firebase } from "../../firebase";
import tinycolor from "tinycolor2";
import { Redirect } from "@reach/router";
import DeleteCardButton from "../buttons/DeleteCardButton";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorCard(props) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [copied, setCopied] = useState(false);

  //delete color or palette
  const handleDelete = () => {
    const color = props.color;
    const data = db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.id}`);
    if (props.colorNumber > 1) {
      data.update({
        colors: firebase.firestore.FieldValue.arrayRemove(`${color}`)
      });
    } else {
      data.delete();
      setShouldRedirect(true);
    }
  };

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => setCopied(false), 1800);
    }
  }, [copied, props.colorNumber]);

  if (props.colorNumber > 0) {
    console.log("Its zero");
  }

  //color converter
  const rgb = tinycolor(props.color).toRgbString();
  const hsl = tinycolor(props.color).toHslString();
  const hex = props.color;
  const color = tinycolor(props.color);

  return shouldRedirect ? (
    <Redirect to="/" />
  ) : (
    <Card
      color={props.color}
      textColor={color.isDark() ? "#fff" : "#141414"}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <CopyToClipboard text={hex} onCopy={() => setCopied(true)}>
        <HexText>{hex.toUpperCase()}</HexText>
      </CopyToClipboard>
      <br />
      <CopyToClipboard text={rgb} onCopy={() => setCopied(true)}>
        <RgbText>{rgb.toUpperCase()}</RgbText>
      </CopyToClipboard>
      <br />

      <CopyToClipboard text={hsl} onCopy={() => setCopied(true)}>
        <HslText>{hsl.toUpperCase()}</HslText>
      </CopyToClipboard>
      <p>{props.index + 1}</p>
      {showButton && (
        <DeleteCardButton
          color={color.isDark() ? "#fff" : "#141414"}
          iconColor={props.color}
          handleDelete={handleDelete}
        />
      )}
      {copied && (
        <Copy
          background={color.isDark() ? "#fff" : "#141414"}
          color={props.color}
        >
          Copied
        </Copy>
      )}
    </Card>
  );
}

export default ColorCard;

const Card = styled.div`
  background: ${props => props.color};
  color: ${props => props.textColor};
  position: relative;
  padding: 2.5em 1.5em;
  border-radius: 5px;
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
  p {
    position: absolute;
    font-size: 1.125em;
    bottom: 1.5rem;
    right: 2rem;
  }
`;

const HexText = styled.h1`
  cursor: pointer;
  font-size: 2.5em;
  margin-bottom: 1.5rem;
  display: inline-block;
  font-weight: 500;
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    border-top: 3px solid ${props => props.textColor};
    top: 2rem;
  }
`;
const RgbText = styled.h1`
  cursor: pointer;
  font-size: 1.75em;
  margin-bottom: 1.5rem;
  display: inline-block;
  font-weight: 500;
`;
const HslText = styled.h1`
  cursor: pointer;
  font-size: 1.25em;
  display: inline-block;
  font-weight: 500;
`;

const Copy = styled.h1`
  cursor: pointer;
  font-size: 1.5em;
  display: inline-block;
  background: ${props => props.background};
  border-radius: 3px;
  color: ${props => props.color};
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font-weight: 500;
`;
