import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

// assets
import {
  FiPlus,
  FiEye,
  FiEyeOff,
  FiChevronsDown,
  FiChevronsUp,
  FiTerminal,
  FiImage,
  FiArrowLeft,
  FiCamera,
  FiSave,
  FiX,
  FiMenu,
} from 'react-icons/fi';
import { blackText, white, mq } from '../utils';
import { downloadSCSS } from '../helpers/helpers';

// icons

export const IconWrapper = styled.span`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 1.125em;
  color: ${({ color }) => color || blackText};
  padding: 0 0.5rem;
  grid-auto-columns: auto 1fr;
  grid-gap: 10px;
  grid-auto-flow: column;
  max-width: 100%;
  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 0.9rem;
    font-weight: 500;
  }
  .export {
    display: none;
  }

  ${mq[1]} {
    .export {
      display: block;
    }
  }
`;

export function PreviewIcon({ preview, setPreview }) {
  return (
    <IconWrapper onClick={() => setPreview(!preview)}>
      {preview ? <FiEyeOff /> : <FiEye />}
    </IconWrapper>
  );
}

export function OrderIcon({ order, setOrder }) {
  return (
    <IconWrapper onClick={() => setOrder(!order)}>
      {order ? <FiChevronsUp /> : <FiChevronsDown />}
    </IconWrapper>
  );
}

export function AddIcon() {
  return (
    <Link to="/new">
      <IconWrapper>
        <FiPlus /> <p>Add new palette</p>
      </IconWrapper>
    </Link>
  );
}

export function BackIcon() {
  return (
    <Link to="/">
      <IconWrapper>
        <FiArrowLeft />
      </IconWrapper>
    </Link>
  );
}

export function PlusIcon() {
  return (
    <IconWrapper>
      <FiPlus />
    </IconWrapper>
  );
}

export function CameraIcon() {
  return (
    <IconWrapper>
      <FiCamera />
    </IconWrapper>
  );
}

export function ExportImageIcon({ handlePNG }) {
  return (
    <IconWrapper onClick={handlePNG}>
      <FiImage />
      <p className="export">Export Image</p>
    </IconWrapper>
  );
}

export function ExportImageScss({ colors }) {
  return (
    <IconWrapper onClick={() => downloadSCSS(colors)}>
      <FiTerminal />
      <p className="export"> Export SCSS </p>
    </IconWrapper>
  );
}

export function SaveIcon() {
  return (
    <IconWrapper>
      <FiSave /> <p>Save</p>
    </IconWrapper>
  );
}

export function CloseIcon() {
  return (
    <IconWrapper>
      <FiX />
    </IconWrapper>
  );
}

export function MenuIcon() {
  return (
    <IconWrapper color={white}>
      <FiMenu />
    </IconWrapper>
  );
}
