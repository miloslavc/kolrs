import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { db } from "../../firebase";
import ColorCard from "../cards/ColorCard";
import AddColorCard from "../cards/AddColorCard";
import ExportPalette from "./ExportPalette";
import ExportButton from "../buttons/ExportButton";
import html2canvas from "html2canvas";

function SelectedPalette(props) {
  const [palette, setPalette] = useState(null);
  const [update, setUpdate] = useState(false);
  const [numberOfColors, setNumberOfColors] = useState();
  const [exportImage, setExportImage] = useState(false);

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

  //export palettes as png image
  const handlePNG = () => {
    setExportImage(true);
  };

  useEffect(() => {
    if (exportImage === true) {
      html2canvas(document.querySelector("#capture")).then(canvas => {
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const link = document.createElement("a");
        link.download = "palette.png";
        link.href = image;
        link.click();
        setExportImage(false);
      });
    }
    return;
  }, [exportImage]);

  return (
    <Wrapper>
      <AddColorCard
        user={props.user}
        paletteId={props.paletteId}
        name={palette && palette.name}
      />
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
      {exportImage && (
        <ExportPalette
          name={update && palette.name}
          colors={update && palette.colors}
        />
      )}
      <ExportButton handlePNG={handlePNG} colors={update && palette.colors} />
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
