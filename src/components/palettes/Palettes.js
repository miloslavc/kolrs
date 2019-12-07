import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

// components
import { FiPlus } from 'react-icons/fi';
import PaletteCards from '../cards/PaletteCards';

// assets
import { AddIcon, PreviewIcon, OrderIcon } from '../../elements';
import { black, blackText } from '../../utils';

function Palettes({ palettes }) {
  const [preview, setPreview] = useState(false);
  const [order, setOrder] = useState(false);

  return (
    <Wrapper>
      <Header>
        <AddIcon />
        <div>
          <PreviewIcon preview={preview} setPreview={setPreview} />
          <OrderIcon order={order} setOrder={setOrder} />
        </div>
      </Header>
      <Content>
        {palettes.length > 0 &&
          (order === false
            ? palettes
            : palettes.slice().reverse()
          ).map((palette, index) => (
            <PaletteCards
              key={palette.id}
              palette={palette}
              id={palette.id}
              index={index}
              preview={preview}
            />
          ))}
        <Link to="/new" className="new-palette">
          <div>
            <span>
              <FiPlus />
            </span>
            <p>Add new palette</p>
          </div>
        </Link>
      </Content>
    </Wrapper>
  );
}

export default Palettes;

Palettes.propTypes = {
  palettes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Wrapper = styled.main`
  display: grid;
  grid-gap: 2em;
  grid-template-rows: auto 1fr;
  margin-bottom: 2em;
  .new-palette {
    height: 100%;
    width: 100%;
    border: 2px dotted black;
    display: grid;
    align-items: center;
    justify-items: center;
    color: ${blackText};
    font-size: 1.125em;
    opacity: 0.5;
    border-radius: 5px;
    &:hover {
      opacity: 1;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Header = styled.div`
  min-height: 5vh;
  height: 100%;
  border-bottom: 1px solid ${black};
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 350px;
`;
