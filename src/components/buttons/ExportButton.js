import React from "react";
import styled from "@emotion/styled";
import { downloadSCSS } from "../../helpers/helpers";

function ExportButton({ handlePNG, colors }) {
  return (
    <Wrapper>
      <IconWrapper onClick={() => downloadSCSS(colors)}>
        <svg width={53.31} height={40} viewBox="0 0 53.31 40">
          <g transform="translate(-0.845 -2.5)">
            <path d="M34.084,3.04l-1.806-.5a.817.817,0,0,0-.685.073.951.951,0,0,0-.452.568L20.275,40.795a.87.87,0,0,0,.073.713.945.945,0,0,0,.568.452l1.806.5a.814.814,0,0,0,.685-.072.949.949,0,0,0,.451-.568L34.725,4.2a.877.877,0,0,0-.073-.714A.94.94,0,0,0,34.084,3.04Z" />
            <path d="M17.8,10.381a.919.919,0,0,0-.292-.67L16.052,8.254a.918.918,0,0,0-1.341,0L1.136,21.83a.917.917,0,0,0,0,1.34L14.711,36.745a.917.917,0,0,0,1.34,0l1.457-1.456a.915.915,0,0,0,0-1.34L6.059,22.5,17.508,11.051A.917.917,0,0,0,17.8,10.381Z" />
            <path d="M53.864,21.829,40.288,8.254a.917.917,0,0,0-1.34,0L37.492,9.711a.917.917,0,0,0,0,1.34L48.941,22.5,37.492,33.949a.917.917,0,0,0,0,1.34l1.456,1.456a.917.917,0,0,0,1.34,0L53.864,23.17a.918.918,0,0,0,0-1.341Z" />
          </g>
        </svg>
      </IconWrapper>
      <IconWrapper onClick={handlePNG}>
        <svg width={56.74} height={45} viewBox="0 0 56.74 45">
          <g transform="translate(-0.63 -2.5)">
            <path d="M56.391,2.5H1.609a.978.978,0,0,0-.979.978V46.522a.978.978,0,0,0,.979.978H56.391a.978.978,0,0,0,.979-.978V3.478A.978.978,0,0,0,56.391,2.5Zm-.978,43.043H2.587V4.457H55.413Z" />
            <path d="M16.283,24.157a5.448,5.448,0,1,0-5.448-5.448A5.454,5.454,0,0,0,16.283,24.157Zm0-8.94a3.492,3.492,0,1,1-3.492,3.493A3.5,3.5,0,0,1,16.283,15.217Z" />
            <path d="M7.478,41.63a.978.978,0,0,0,.646-.243l15.958-14.05L34.16,37.414a.978.978,0,0,0,1.384-1.383l-4.7-4.7,8.982-9.835,11.016,10.1a.978.978,0,1,0,1.321-1.443L40.421,19.388a1.014,1.014,0,0,0-.7-.257.985.985,0,0,0-.679.318L29.457,29.943l-4.64-4.64a.979.979,0,0,0-1.338-.043L6.832,39.918a.978.978,0,0,0,.646,1.712Z" />
          </g>
        </svg>
      </IconWrapper>
    </Wrapper>
  );
}

export default ExportButton;

const Wrapper = styled.div`
  position: fixed;
  height: 8em;
  width: 4em;
  background: #fff;
  border-radius: 5;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(31, 53, 78, 0.11) 0 0 0 1px, rgba(0, 0, 0, 0.05) 0 2px 5px;
`;

const IconWrapper = styled.div`
  height: 25px;
  svg {
    height: 100%;
    fill: #a6a6a6;
    &:hover {
      fill: #141414;
      cursor: pointer;
    }
  }
`;
