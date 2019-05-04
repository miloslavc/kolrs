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
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 1.5em;
  border-radius: 5px;
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: ${props => props.top};
  h1 {
    text-transform: capitalize;
    font-size: 1.5em;
    height: 100%;
    color: #666;
    &:hover {
      cursor: pointer;
      color: #141414;
    }
  }
`;

const PickerWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: ${props => props.top};
  padding: 1.5em;
  background: #fff;
`;
