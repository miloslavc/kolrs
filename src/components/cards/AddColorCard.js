import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { db, firebase } from "../../firebase";
import MyPicker from "../colorpicker/MyPicker";
import tinycolor from "tinycolor2";

function AddColorCard(props) {
  const [color, setColor] = useState("#fff");
  const [move, setMove] = useState(false);
  const [saved, setSaved] = useState(false);

  //save selected color in state
  const handleChange = color => {
    setColor(color.hex);
  };

  //upload new item to the doc
  const handleUpdate = () => {
    const selectedColor = color;
    setSaved(true);
    const data = db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.paletteId}`);
    data.update({
      colors: firebase.firestore.FieldValue.arrayUnion(`${selectedColor}`)
    });
  };

  //show confirmation when color is saved
  useEffect(() => {
    if (saved === true) {
      setTimeout(() => setSaved(false), 1800);
    }
  }, [saved]);

  // check if the color is light or dark
  const textColor = tinycolor(color);

  return (
    <Wrapper>
      <ButtonWrapper top={move ? "100%" : null}>
        <Title>{props.name}</Title>
        <AddColor
          onClick={() => {
            setMove(!move);
          }}
        >
          <h1>Add color</h1>
        </AddColor>
      </ButtonWrapper>
      <PickerWrapper top={move ? "0" : "-100%"}>
        <MyPicker
          color={color}
          onChangeComplete={handleChange}
          // onChange={handleChange}
          handleUpdate={handleUpdate}
          width="100%"
        />
        {saved && (
          <Saved
            color={color}
            background={textColor.isDark() ? "#fff" : "#141414"}
          >
            Saved!
          </Saved>
        )}
      </PickerWrapper>
    </Wrapper>
  );
}

export default AddColorCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  -webkit-filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: ${props => props.top};
  padding: 2.5em 1.5em;
  width: 100%;
  height: 100%;
`;

const PickerWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: ${props => props.top};
  padding: 1.5em;
  background: #fff;
`;

const Title = styled.h1`
  cursor: pointer;
  font-size: 2.5em;
  margin-bottom: 1.5rem;
  display: inline-block;
  align-self: flex-start;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    border-top: 3px solid #141414;
    top: 2rem;
  }
`;

const AddColor = styled.div`
  height: 100px;
  width: 100px;
  color: #fff;
  background: #141414;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 1.125em;
  }
`;

const Saved = styled.h1`
  cursor: pointer;
  font-size: 2.5em;
  font-weight: 700;
  display: inline-block;
  background: ${props => props.background};
  border-radius: 3px;
  color: ${props => props.color};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
