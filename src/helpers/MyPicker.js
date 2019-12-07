/* eslint-disable no-unused-expressions */
import React from 'react';
import { CustomPicker } from 'react-color';
import styled from '@emotion/styled';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';
import color from 'react-color/lib/helpers/color';

// custom pointer
const MyPointer = () => {
  return (
    <div
      style={{
        transform: 'translate(-50%, -50%)',
        height: '22px',
        width: '22px',
        border: '3px solid #fff',
        borderRadius: '50%',
        cursor: 'pointer',
        filter: 'drop-shadow(0 0 5px #ACACAC)',
      }}
    />
  );
};
// custom hue pointer
const MyHuePointer = () => {
  return (
    <div
      style={{
        height: '17px',
        width: '17px',
        borderRadius: '50%',
        cursor: 'pointer',
        filter: 'drop-shadow(0 0 2px #ACACAC)',
        background: '#fff',
        transform: 'translate(-11px,-1px)',
        position: 'absolute',
      }}
    />
  );
};

export const MyPicker = ({ rgb, hex, hsl, hsv, onChange, handleUpdate }) => {
  const handleChangeHex = (hexCode, e) => {
    color.isValidHex(hexCode) &&
      onChange(
        {
          hex: hexCode,
          source: 'hex',
        },
        e,
      );
  };

  const handleChange = (data, e) => {
    if (data.r || data.g || data.b) {
      onChange(
        {
          r: data.r || rgb.r,
          g: data.g || rgb.g,
          b: data.b || rgb.b,
          source: 'rgb',
        },
        e,
      );
    }
  };

  const styles = {
    hue: {
      height: 15,
      position: 'relative',
      width: '100%',
      marginBottom: '5px',
      borderRadius: '3px',
    },
    saturation: {
      height: '200px',
      position: 'relative',
      width: '100%',
      borderRadius: '3px',
    },
    input: {
      height: 35,
      border: 'none',
      borderBottom: `2px solid ${hex}`,
      width: '90%',
      textAlign: 'center',
      outline: 'none',
      background: '#000',
      fontSize: '1.2em',
      margin: '0 auto',
      marginBottom: '10px',
      color: '#fff',
      display: 'block',
    },
    label: {
      fontSize: '0.8em',
      color: '#666',
    },
    rgb: {
      height: 20,
      width: '100%',
      border: 'none',
      textAlign: 'center',
      outline: 'none',
      background: '#000',
      fontSize: '0.9em',
      color: '#fff',
      display: 'block',
    },
    single: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
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
      <EditableInput
        style={{ input: styles.input }}
        value={hex}
        // value={hex.replace("#", "")}
        onChange={handleChangeHex}
        // onChange={onChange}
        width="100%"
        label={null}
      />
      <RGBWrapper>
        <div style={styles.single}>
          <EditableInput
            style={{ input: styles.rgb, label: styles.label }}
            label="r"
            value={rgb.r}
            onChange={handleChange}
            dragLabel="true"
            dragMax="255"
          />
        </div>
        <div style={styles.single}>
          <EditableInput
            style={{ input: styles.rgb, label: styles.label }}
            label="g"
            value={rgb.g}
            onChange={handleChange}
            dragLabel="true"
            dragMax="255"
          />
        </div>
        <div style={styles.single}>
          <EditableInput
            style={{ input: styles.rgb, label: styles.label }}
            label="b"
            value={rgb.b}
            onChange={handleChange}
            dragLabel="true"
            dragMax="255"
          />
        </div>
      </RGBWrapper>

      <StyledButton color={hex} onClick={handleUpdate}>
        Save
      </StyledButton>
    </Wrapper>
  );
};

export default CustomPicker(MyPicker);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const RGBWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 1.125em;
  color: #fff;
  padding: 0.5em;
  &:hover {
    cursor: pointer;
  }
`;
