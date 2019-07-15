import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { db, firebase } from "../../firebase";
import MyPicker from "../../helpers/MyPicker";
import tinycolor from "tinycolor2";
import { UserContext } from "../../context/UserContext";

//assets
import { CardShadow, white, blackText, black } from "../../utils";
import { FiPlus } from "react-icons/fi";

function AddColorCard(props) {
  const { user } = useContext(UserContext);
  const [color, setColor] = useState(white);
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
      .doc(`${user.uid}`)
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
      {move === false ? (
        <ButtonWrapper
          onClick={() => {
            setMove(true);
          }}
        >
          <div>
            <FiPlus /> Add color
          </div>
        </ButtonWrapper>
      ) : (
        <PickerWrapper>
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
              background={textColor.isDark() ? white : blackText}
            >
              Saved!
            </Saved>
          )}
        </PickerWrapper>
      )}
    </Wrapper>
  );
}

export default AddColorCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${CardShadow}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px dotted black;
  display: grid;
  align-items: center;
  justify-items: center;
  opacity: 0.5;
  border-radius: 5px;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const PickerWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${black};
  border-radius: 5px;
  position: relative;
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
