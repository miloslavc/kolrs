import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { Router } from '@reach/router';
import { UserContext } from '../../context/UserContext';

// api

// layout
import HeaderApp from '../../components/layouts/HeaderApp';

// pages
import Palettes from '../../components/palettes/Palettes';
import SelectedPalette from '../../components/palettes/SelectedPalette';
import NewPalette from '../../components/palettes/NewPalette';
import { db } from '../../firebase';
import Account from './Account';
import Privacy from './Privacy';

function Profile() {
  const { user } = useContext(UserContext);
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    return db
      .collection('users')
      .doc(`${user.uid}`)
      .collection('palettes')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
          docs.push({
            ...doc.data(),
          });
        });
        setPalettes(docs);
      });
  }, [user, user.uid]);

  return (
    <Wrapper>
      <HeaderApp />
      <Router primary={false}>
        <Palettes path="/" palettes={palettes} />
        <SelectedPalette path="palette/:paletteId" />
        <NewPalette path="/new" />
        <Account path="account" />
        <Privacy path="privacy-policy" />
      </Router>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.main`
  background: #fff;
  min-height: 100vh;
`;
