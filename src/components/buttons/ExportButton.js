import React, { useState } from "react";
import styled from "@emotion/styled";
import { downloadSCSS } from "../../helpers/helpers";

//assets
import { FiShare2, FiTerminal, FiImage } from "react-icons/fi";
import { blackText, white } from "../../utils";

function ExportButton({ handleDelete, textColor, colors }) {
  const [showExport, setShowExport] = useState(false);

  const handleLeave = () => {
    if (showExport) {
      setShowExport(false);
    }
    return;
  };

  return (
    <ExportContainer
      showExport={showExport}
      textColor={textColor}
      onMouseLeave={handleLeave}
    >
      <IconWrapper
        onClick={() => {
          setShowExport(!showExport);
        }}
        textColor={textColor}
      >
        <FiShare2 />
      </IconWrapper>
      {showExport && (
        <>
          <IconWrapper className="active" textColor={textColor}>
            <FiTerminal onClick={() => downloadSCSS(colors)} />
          </IconWrapper>
          <IconWrapper className="active" textColor={textColor}>
            <FiImage />
          </IconWrapper>
        </>
      )}
    </ExportContainer>
  );
}

export default ExportButton;

const IconContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  .active {
    &:hover {
      background: ${({ textColor }) => textColor};
      color: ${({ textColor }) => (textColor === white ? blackText : white)};
    }
  }
`;

const ExportContainer = styled(IconContainer)`
  width: ${({ showExport }) => (showExport ? "120px" : "40px")};
`;

const IconWrapper = styled.span`
  width: 40px;
  height: 100%;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  &:hover {
    cursor: pointer;
  }
  font-size: 1.25em;
  color: ${({ textColor }) => textColor};
`;
