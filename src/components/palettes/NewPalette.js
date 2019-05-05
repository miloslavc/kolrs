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
    // const color = colorRef.current.value;
    const palette = {
      name,
      id,
      // colors: [color],
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
    <Redirect from="/new" to={`/${id}`} noThrow />
  ) : (
    <Wrapper>
      <Modal>
        <Heading>Create new palette</Heading>
        <FormStyled onSubmit={handleSubmit}>
          <WrapperForm>
            <input
              ref={paletteNameRef}
              type="text"
              name="projectName"
              placeholder="Palette Name"
              autoComplete="off"
              required
            />
          </WrapperForm>
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
  background: #fff;
  z-index: 10;
  padding: 1em;
  max-width: 400px;
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 0;
  overflow: hidden;
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
  background: rgba(0, 0, 0, 0.3);
  z-index: -99;
`;

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const FormStyled = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  input {
    height: 60px;
    font-size: 1.5em;
    color: #666;
    padding-left: 0.8em;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    outline: none;
    width: 100%;
    margin: 0.8rem;

    &:focus {
      border: 1px solid #00e095;
    }
  }
`;

const Heading = styled.h1`
  width: 100%;
  background: #00e095;
  text-align: center;
  padding: 1em;
  color: #fff;
`;
