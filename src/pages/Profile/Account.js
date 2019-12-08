/* eslint-disable no-console */
/* eslint-disable func-names */
import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import Avatar from 'components/user/Avatar';
import { Redirect } from '@reach/router';
import Footer from 'components/layouts/Footer';
import { firebase } from '../../firebase';
import { UserContext } from '../../context/UserContext';

function Account() {
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState(user.email);
  const [redirect, setRedirect] = useState(false);

  console.log(user);

  const handleDelete = () => {
    const activeUser = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      activeUser.email,
      'miloslav',
    );

    user
      .reauthenticateWithCredential(credential)
      .then(function() {
        user.delete();
      })
      .catch(function(error) {
        console.log('An error happened.');
        console.log(error);
      });
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <Wrapper>
      <ModalWrapper>
        <AvatarWrapper>
          <Avatar user={user} width="100px" height="100px" />
        </AvatarWrapper>
        <Heading>Account Info</Heading>
        <Form>
          <label htmlFor="user-email">
            Email
            <input
              type="text"
              id="user-email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <Button onClick={() => console.log(email)}>Update</Button>
        </Form>
        <Heading>Delete Account</Heading>
        <p>
          Delete my account and all the data associated. This action is
          irreversible.
        </p>
        <ButtonDelete onClick={handleDelete}>Delete Account</ButtonDelete>
      </ModalWrapper>
      <Footer />
    </Wrapper>
  );
}

export default Account;

const Wrapper = styled.div`
  display: grid;
  min-height: calc(100vh - 72px);
  align-items: center;
  place-items: center;
`;

const ModalWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(118, 118, 118, 0.2) 0 0 0 1px, rgba(0, 0, 0, 0.05) 0 2px 5px;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  box-shadow: rgba(118, 118, 118, 0.2) 0 1px;
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const AvatarWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
  div {
    margin: 0;
  }
`;

const Button = styled.button`
  display: block;
  border: none;
  outline: none;
  width: 50%;
  padding: 1em;
  font-size: 1.125em;
  background: #5120a9;
  color: #fff;
  border-radius: 5px;
  align-self: flex-end;
  margin-top: 1em;
  cursor: pointer;
`;

const ButtonDelete = styled(Button)`
  background: none;
  border: 2px solid #000;
  color: #000;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    height: 50px;
    padding-left: 1em;
    margin: 1em 0 0;
    border-radius: 5px;
    outline: none;
    border: 2px solid #000;
    font-size: 1em;
  }
  label {
    font-size: 1.125em;
  }
`;
