import React, { useState } from "react";
import styled from "@emotion/styled";
import { db, firebase } from "../../firebase";
import MyPicker from "../colorpicker/MyPicker";

function AddColorCard(props) {
  const [color, setColor] = useState("#fff");
  const [move, setMove] = useState(false);

  const handleChange = color => {
    setColor(color.hex);
  };

  //upload new item to the doc
  const handleUpdate = () => {
    const selectedColor = color;
    const data = db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .doc(`${props.paletteId}`);
    data.update({
      colors: firebase.firestore.FieldValue.arrayUnion(`${selectedColor}`)
    });
  };

  return (
    <Wrapper>
      <ButtonWrapper top={move ? "100%" : null}>
        <h1
          onClick={() => {
            setMove(!move);
          }}
        >
          Add a color
        </h1>
      </ButtonWrapper>

      <PickerWrapper top={move ? "0" : "-100%"}>
        <MyPicker
          color={color}
          onChangeComplete={handleChange}
          // onChange={handleChange}
          handleUpdate={handleUpdate}
          width="100%"
        />
      </PickerWrapper>
    </Wrapper>
  );
}

export default AddColorCard;

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  margin: 1em;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
`;

const ButtonWrapper = styled.div`
  border: 1px dashed black;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: ${props => props.top};
  h1 {
    font-size: 1.5em;
    opacity: 0.5;
    height: 100%;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

const PickerWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: ${props => props.top};
`;
