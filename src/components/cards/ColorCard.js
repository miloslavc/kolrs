import React, { useState } from "react";
import styled from "@emotion/styled";
import { db, firebase } from "../../firebase";
import tinycolor from "tinycolor2";
import { textColor } from "../../helpers/helpers";
import { Redirect } from "@reach/router";
import DeleteCardButton from "../buttons/DeleteCardButton";

function ColorCard(props) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showButton, setShowButton] = useState(false);

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

  //color converter
  const rgb = tinycolor(props.color).toRgbString();
  const hsl = tinycolor(props.color).toHslString();

  return shouldRedirect ? (
    <Redirect to="/" />
  ) : (
    <Card
      color={props.color}
      textColor={textColor(props.color)}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <h1>{props.color}</h1>
      <h1>{rgb}</h1>
      <h1>{hsl}</h1>
      {showButton && <DeleteCardButton handleDelete={handleDelete} />}
    </Card>
  );
}

export default ColorCard;

const Card = styled.div`
  background: ${props => props.color};
  color: ${props => props.textColor};
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
  text-decoration: none;
  position: relative;
  padding: 1em;
  border-radius: 5px;
`;
