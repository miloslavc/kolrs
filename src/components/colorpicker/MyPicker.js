import React from "react";
import { CustomPicker } from "react-color";
import styled from "@emotion/styled";
import {
  EditableInput,
  Hue,
  Saturation
} from "react-color/lib/components/common";
import color from "react-color/lib/helpers/color";

export const MyPicker = ({ hex, hsl, hsv, onChange, handleUpdate }) => {
  const handleChange = (hexCode, e) => {
    color.isValidHex(hexCode) &&
      onChange(
        {
          hex: hexCode,
          source: "hex"
        },
        e
      );
  };

  const styles = {
    hue: {
      height: 15,
      position: "relative",
      marginBottom: 30,
      width: "100%"
    },
    saturation: {
      height: "200px",
      position: "relative",
      width: "100%"
    },
    input: {
      height: 34,
      border: `2px solid ${hex}`,
      width: "100%",
      textAlign: "center",
      outline: "none",
      background: `${hex}`
    }
  };

  return (
    <Wrapper>
      <div style={styles.saturation}>
        <Saturation
          hsl={hsl}
          hsv={hsv}
          onChange={onChange}
          pointer={MyPointer}
        />
      </div>
      <div style={styles.hue}>
        <Hue hsl={hsl} onChange={onChange} pointer={MyPointer} />
      </div>
      <InputWrapper>
        <EditableInput
          style={{ input: styles.input }}
          value={hex}
          // value={hex.replace("#", "")}
          onChange={handleChange}
          // onChange={onChange}
          width="100%"
          label={null}
        />
        <StyledButton onClick={handleUpdate}>+ Save</StyledButton>
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomPicker(MyPicker);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 50%;
  }
`;

const StyledButton = styled.button`
  width: 50%;
  border: none;
  background: none;
  outline: none;
  font-size: 1em;

  &:hover {
    color: blue;
    font-weight: bold;
    cursor: pointer;
  }
`;

//custom pointer
const MyPointer = () => {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
        height: "12px",
        width: "12px",
        border: "2px solid black",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "inset 0 0 0 2px #fff"
      }}
    />
  );
};
