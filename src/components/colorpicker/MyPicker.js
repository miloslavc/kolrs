import React from "react";
import { CustomPicker } from "react-color";
import styled from "@emotion/styled";
import {
  EditableInput,
  Hue,
  Saturation
} from "react-color/lib/components/common";
import color from "react-color/lib/helpers/color";
import tinycolor from "tinycolor2";

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

  const textColor = tinycolor(hex);

  const styles = {
    hue: {
      height: 20,
      position: "relative",
      marginBottom: 30,
      width: "100%",
      borderRadius: "3px"
    },
    saturation: {
      height: "250px",
      position: "relative",
      width: "100%",
      marginBottom: 30,
      borderRadius: "3px"
    },
    input: {
      height: 60,
      border: `2px solid ${hex}`,
      width: "100%",
      textAlign: "center",
      outline: "none",
      borderRadius: "3px",
      background: `${hex}`,
      fontSize: "1.2em",
      color: `${textColor.isDark() ? "#fff" : "#141414"}`
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
        <Hue hsl={hsl} onChange={onChange} pointer={MyHuePointer} />
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
        <StyledButton color={hex} onClick={handleUpdate}>
          Save
        </StyledButton>
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
    margin: 0.5em;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledButton = styled.button`
  width: 50%;
  border: 2px solid transparent;
  border-radius: 3px;
  background: none;
  outline: none;
  font-size: 1.125em;
  color: #141414;
  margin: 0.5em;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  &:hover {
    /* font-weight: bold; */
    cursor: pointer;
    border: 2px solid ${props => props.color};
  }
`;

//custom pointer
const MyPointer = () => {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
        height: "18px",
        width: "18px",
        border: "2px solid #fff",
        borderRadius: "50%",
        cursor: "pointer",
        filter: "drop-shadow(0 0 5px #333)"
      }}
    />
  );
};
//custom pointer
const MyHuePointer = () => {
  return (
    <div
      style={{
        height: "18px",
        width: "18px",
        border: "3px solid #fff",
        borderRadius: "50%",
        cursor: "pointer",
        filter: "drop-shadow(0 0 5px #333)"
      }}
    />
  );
};
