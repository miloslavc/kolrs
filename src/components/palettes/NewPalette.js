import React, { useRef, useState, useEffect } from "react";
import { db } from "../../firebase";
import { Redirect } from "@reach/router";
import AddColorCard from "../cards/AddColorCard";

function NewPalette(props) {
  const [id, setID] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const colorRef = useRef(null);
  const paletteNameRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const name = paletteNameRef.current.value;
    const id = name.toLowerCase().replace(/ +/g, "");
    const color = colorRef.current.value;
    const palette = {
      name,
      id,
      colors: [color],
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
    <div>
      <h1>Create new selection</h1>
      <form onSubmit={handleSubmit}>
        <label>Palette Name</label>
        <input ref={paletteNameRef} type="text" name="projectName" required />
        <button type="submit">Submit</button>
      </form>
      <AddColorCard user={props.user} paletteId={props.paletteId} />
    </div>
  );
}

export default NewPalette;
