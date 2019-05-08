import React, { useRef, useState, useEffect } from "react";
import { db } from "../../firebase";
import { Redirect } from "@reach/router";
import styled from "@emotion/styled";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import SaveButton from "../buttons/SaveButton";

function NewPalette(props) {
  const [id, setID] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [shouldReturn, setShouldReturn] = useState(false);

  const paletteNameRef = useRef(null);

  const handleReturn = () => {
    setShouldReturn(!shouldReturn);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = capitalizeFirstLetter(paletteNameRef.current.value);
    const id = name.toLowerCase().replace(/ +/g, "");
    const colors = [];
    const palette = {
      name,
      id,
      colors,
      createdAt: new Date()
    };
    db.collection("users")
      .doc(`${props.user}`)
      .collection("palettes")
      .doc(`${id}`)
      .set({ ...palette });
    setID(id);
    e.target.reset();
  };

  useEffect(() => {
    if (id) {
      setShouldRedirect(true);
    }
  }, [id, shouldRedirect]);

  return shouldRedirect ? (
    <Redirect from="/new" to={`palette/${id}`} noThrow />
  ) : (
    <Wrapper>
      <Modal>
        <Heading>Create new palette</Heading>
        <FormStyled onSubmit={handleSubmit}>
          <input
            ref={paletteNameRef}
            type="text"
            name="projectName"
            placeholder="Palette Name"
            autoComplete="off"
            required
          />
          <SaveButton />
        </FormStyled>
      </Modal>
      <Dimmed onClick={handleReturn} />
      {shouldReturn && <Redirect from="/new" to="/" noThrow />}
    </Wrapper>
  );
}

export default NewPalette;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Modal = styled.div`
  background: #00e095;
  position: relative;
  z-index: 10;
  max-width: 400px;
  height: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 2.5em 1.5em;
  overflow: hidden;
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.3));

  @media (max-width: 900px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  z-index: -99;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  input {
    height: 60px;
    font-size: 2em;
    color: #141414;
    padding-left: 0.1em;
    font-weight: 400;
    border: none;
    border-bottom: 2px solid #141414;
    outline: none;
    width: 100%;
    background: #00e095;
    margin-bottom: 3.2em;
    border-bottom-width: 80%;
    &:focus {
      border-bottom-width: 100%;
    }

    /* placeholder css */
    ::-webkit-input-placeholder {
      color: #141414;
      opacity: 0.5;
    }
    ::-moz-placeholder {
      color: #141414;
      opacity: 0.5;
    }
    :-ms-input-placeholder {
      color: #141414;
    }
    :-moz-placeholder {
      color: #141414;
    }
  }
`;

const Heading = styled.h1`
  font-size: 2.5em;
  display: inline-block;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    border-top: 3px solid ${props => props.textColor};
    top: 2rem;
  }
`;
