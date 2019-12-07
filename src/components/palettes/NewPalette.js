import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Redirect } from '@reach/router';
import { capitalizeFirstLetter } from '../../helpers/helpers';

// api
import { db } from '../../firebase';

// context
import { UserContext } from '../../context/UserContext';

// components
import AddColorCard from '../cards/AddColorCard';

// assets
import {
  BackIcon,
  ExportImageIcon,
  ExportImageScss,
  SaveIcon,
  CloseIcon,
  CloseButton,
  AppButton,
} from '../../elements';
import { black, white } from '../../utils';

function NewPalette() {
  const { user } = useContext(UserContext);

  const [docId, setID] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [shouldReturn, setShouldReturn] = useState(false);

  const paletteNameRef = useRef(null);

  const handleReturn = () => {
    setShouldReturn(!shouldReturn);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = capitalizeFirstLetter(paletteNameRef.current.value);
    const id = name.toLowerCase().replace(/ +/g, '');
    const colors = [];
    const palette = {
      name,
      id,
      colors,
      createdAt: new Date(),
    };
    db.collection('users')
      .doc(`${user.uid}`)
      .collection('palettes')
      .doc(`${id}`)
      .set({ ...palette });
    setID(id);
    e.target.reset();
  };

  useEffect(() => {
    if (docId) {
      setShouldRedirect(true);
    }
  }, [docId, shouldRedirect]);

  return shouldRedirect ? (
    <Redirect from="/new" to={`palette/${docId}`} noThrow />
  ) : (
    <Wrapper>
      <Header>
        <BackIcon />
        <h2>New Palette</h2>
        <div>
          <ExportImageIcon />
          <ExportImageScss />
        </div>
      </Header>
      <Content>
        <AddColorCard name="Create new palette" />
      </Content>
      <Modal>
        <FormStyled onSubmit={handleSubmit}>
          <input
            ref={paletteNameRef}
            type="text"
            name="projectName"
            placeholder="Palette Name"
            autoComplete="off"
            required
          />
          <AppButton type="submit">
            <SaveIcon />
          </AppButton>
          <CloseButton onClick={handleReturn}>
            <CloseIcon />
          </CloseButton>
        </FormStyled>
        <Dimmed onClick={handleReturn} />
      </Modal>
      {shouldReturn && <Redirect from="/new" to="/" noThrow />}
    </Wrapper>
  );
}

export default NewPalette;

const Wrapper = styled.section`
  min-height: 100%;
  display: grid;
  grid-gap: 2em;
  grid-template-rows: auto 1fr;
  position: relative;
`;

const Header = styled.div`
  min-height: 5vh;
  border-bottom: 1px solid ${black};
  padding: 0 5%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  a {
    justify-self: start;
  }
  div {
    justify-self: end;
    display: flex;
    pointer-events: none;
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
  pointer-events: none;
`;

const Modal = styled.div`
  background: rgba(18, 18, 18, 0.8);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: none;
  z-index: -99;
`;

const FormStyled = styled.form`
  background: ${white};
  border-radius: 5px;
  max-width: 350px;
  width: 100%;
  padding: 4em 2em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  input {
    font-size: 1.5em;
    color: ${black};
    padding-left: 0.1em;
    font-weight: 400;
    border: none;
    border-bottom: 2px solid ${black};
    outline: none;
    width: 100%;
    background: #fff;
    margin-bottom: 3rem;
    border-bottom-width: 80%;
    &:focus {
      border-bottom-width: 100%;
    }
    ::-webkit-input-placeholder {
      color: ${black};
      opacity: 0.5;
    }
    ::-moz-placeholder {
      color: ${black};
      opacity: 0.5;
    }
    :-ms-input-placeholder {
      color: ${black};
    }
    :-moz-placeholder {
      color: ${black};
    }
  }
`;
