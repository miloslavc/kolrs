import React, { useState, useEffect, useContext } from "react";
import { Router } from "@reach/router";
import { UserContext } from "../context/UserContext";

//api
import { db } from "../firebase";

//layout
import HeaderApp from "../layouts/HeaderApp";

//pages
import Palettes from "../components/palettes/Palettes";
import SelectedPalette from "../components/palettes/SelectedPalette";
import NewPalette from "../components/palettes/NewPalette";
// import Account from "./Account";

function Profile() {
  const { user } = useContext(UserContext);
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    return db
      .collection("users")
      .doc(`${user.uid}`)
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
  }, [user, user.uid]);

  return (
    <>
      <HeaderApp />
      <Router primary={false}>
        <Palettes path="/" palettes={palettes} />
        <SelectedPalette path="palette/:paletteId" />
        <NewPalette path="/new" palettes={palettes} />
        {/* <Account path="account" /> */}
      </Router>
    </>
  );
}

export default Profile;
