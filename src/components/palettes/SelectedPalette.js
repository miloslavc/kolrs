import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { db } from "../../firebase";
import ColorCard from "../cards/ColorCard";
import AddColorCard from "../cards/AddColorCard";
function SelectedPalette(props) {
  const [palette, setPalette] = useState(null);
  const [update, setUpdate] = useState(false);
  const [numberOfColors, setNumberOfColors] = useState();

  //get selected project data from firebase and put it to state
  useEffect(() => {
    return db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.paletteId}`)
      .onSnapshot(
        {
          // Listen for document metadata changes
          includeMetadataChanges: true
        },
        function(doc) {
          setPalette(doc.data());
          if (doc.data().colors) {
            setUpdate(true);
            setNumberOfColors(doc.data().colors.length);
          }
        }
      );
  }, [props.paletteId, props.user.uid]);

  return (
    <Wrapper>
      <AddColorCard user={props.user} paletteId={props.paletteId} />
      {update &&
        palette.colors.map((color, index) => (
          <ColorCard
            key={color}
            color={color}
            user={props.user}
            id={props.paletteId}
            colorNumber={numberOfColors}
            index={index}
          >
            {color}
          </ColorCard>
        ))}
    </Wrapper>
  );
}

export default SelectedPalette;

const Wrapper = styled.div`
  display: grid;
  width: 90%;
  margin: 2em auto;
  grid-auto-flow: row;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 450px;
`;
