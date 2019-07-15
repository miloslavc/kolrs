import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import tinycolor from "tinycolor2";
import { UserContext } from "../../context/UserContext";

//api
import { db } from "../../firebase";

//components
import PaletteColorPreview from "./PaletteColorPreview";
import DeleteButton from "../buttons/DeleteButton";
import ExportButton from "../buttons/ExportButton";

//assets
import { Card, CardH1 } from "../../elements";
import { blackText, white } from "../../utils";

function PaletteCards(props) {
  const { user } = useContext(UserContext);
  const [backgroundColor, setBackgroundColor] = useState(
    props.palette.colors[0]
  );

  const handleBackground = color => {
    setBackgroundColor(color);
  };

  const handleDelete = () => {
    const data = db
      .collection("users")
      .doc(`${user.uid}`)
      .collection("palettes")
      .doc(`${props.id}`);
    data.delete();
  };

  const color = tinycolor(backgroundColor);
  const textColor = color.isDark() ? white : blackText;

  return (
    <Wrapper>
      <Link to={`palette/${props.palette.id}`}>
        <Card
          color={
            props.palette.colors.length !== 0 ? backgroundColor : blackText
          }
          textColor={textColor}
        >
          <CardH1>{props.palette.name}</CardH1>
          {props.preview && (
            <PaletteColorPreview
              colors={props.palette.colors}
              handleBackground={handleBackground}
            />
          )}
        </Card>
      </Link>
      <Icons>
        <ExportButton
          textColor={textColor}
          handleDelete={handleDelete}
          colors={props.palette.colors}
        />
        <DeleteButton textColor={textColor} handleDelete={handleDelete} />
      </Icons>
    </Wrapper>
  );
}

export default PaletteCards;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Icons = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;
