import React, { useState, useEffect } from "react";
import Nav from "../components/user/Nav";
import { db } from "../firebase";
import { Router } from "@reach/router";
import Palettes from "../components/palettes/Palettes";
import AddPalette from "../components/palettes/AddPalette";
import SelectedPalette from "../components/palettes/SelectedPalette";
import NewPalette from "../components/palettes/NewPalette";
import NotFound from "../pages/NotFound";

function Profile(props) {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    return db
      .collection("users")
      .doc(`${props.user.uid}`)
      .collection("palettes")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
          docs.push({
            ...doc.data()
          });
        });
        setPalettes(docs);
      });
  }, [props.user, props.user.uid]);

  return (
    <main>
      <Nav user={props.user} />
      <Router>
        {palettes.length ? (
          <Palettes
            path="/"
            palettes={palettes}
            color={palettes.colors}
            user={props.user}
          />
        ) : (
          <AddPalette path="/" />
        )}
        <SelectedPalette path="palette/:paletteId" user={props.user} />
        <NewPalette
          path="/new"
          palettes={palettes}
          user={`${props.user.uid}`}
        />
        <NotFound default />
      </Router>
    </main>
  );
}

export default Profile;
