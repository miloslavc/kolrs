/* eslint-disable func-names */
import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import html2canvas from 'html2canvas';
import { UserContext } from '../../context/UserContext';

// api
import { db } from '../../firebase';

// components
import ColorCard from '../cards/ColorCard';
import AddColorCard from '../cards/AddColorCard';
import PaletteImage from '../../helpers/PaletteImage';

// import ExportButton from "../buttons/ExportButton";

// assets
import { BackIcon, ExportImageIcon, ExportImageScss } from '../../elements';
import { black } from '../../utils';

function SelectedPalette({ paletteId }) {
  const { user } = useContext(UserContext);
  const [palette, setPalette] = useState(null);
  const [update, setUpdate] = useState(false);
  const [numberOfColors, setNumberOfColors] = useState();
  const [exportImage, setExportImage] = useState(false);

  // get selected project data from firebase and put it to state
  useEffect(() => {
    return db
      .collection('users')
      .doc(`${user.uid}`)
      .collection('palettes')
      .doc(`${paletteId}`)
      .onSnapshot(
        {
          // Listen for document metadata changes
          includeMetadataChanges: true,
        },
        function(doc) {
          setPalette(doc.data());
          if (doc.data().colors) {
            setUpdate(true);
            setNumberOfColors(doc.data().colors.length);
          }
        },
      );
  }, [paletteId, user.uid]);

  // export palettes as png image
  const handlePNG = () => {
    setExportImage(true);
  };

  // issue with loading module - to be fixed
  useEffect(() => {
    if (exportImage === true) {
      html2canvas(document.querySelector('#capture')).then(canvas => {
        const image = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
        const link = document.createElement('a');
        link.download = 'palette.png';
        link.href = image;
        link.click();
        setExportImage(false);
      });
    }
  }, [exportImage]);

  return (
    <Wrapper>
      <Header>
        <BackIcon />
        <h2>{palette && palette.name}</h2>
        <div>
          <ExportImageIcon handlePNG={handlePNG} />
          <ExportImageScss colors={update && palette.colors} />
        </div>
      </Header>
      <Content>
        <AddColorCard paletteId={paletteId} name={palette && palette.name} />
        {update &&
          palette.colors.map((color, index) => (
            <ColorCard
              key={color}
              color={color}
              id={paletteId}
              colorNumber={numberOfColors}
              index={index}
            >
              {color}
            </ColorCard>
          ))}
        {exportImage && (
          <PaletteImage
            name={update && palette.name}
            colors={update && palette.colors}
          />
        )}
      </Content>
    </Wrapper>
  );
}

export default SelectedPalette;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-rows: auto 1fr;
  margin-bottom: 2em;
`;

const Header = styled.div`
  min-height: 5vh;
  border-bottom: 1px solid ${black};
  padding: 0 5%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  a {
    justify-self: start;
  }
  div {
    justify-self: end;
    display: flex;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 350px;
`;
