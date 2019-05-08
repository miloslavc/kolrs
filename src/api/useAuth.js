import { useState, useEffect } from "react";
import { db, firebase } from "../firebase";

export default function useAuth() {
  const [userRequest, setUserRequest] = useState({
    loading: true,
    user: useState(JSON.parse(localStorage.getItem("user")))
  });

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(appUser => {
      if (appUser) {
        const user = {
          displayName: appUser.displayName,
          photoURL: appUser.photoURL,
          uid: appUser.uid,
          email: appUser.email
        };
        localStorage.setItem("user", JSON.stringify(user));
        setUserRequest({
          loading: false,
          user: user
        });
        db.collection("users")
          .doc(user.uid)
          .set(user, { merge: true });
      } else {
        localStorage.removeItem("user");
        setUserRequest({
          user: null
        });
      }
    });
  }, []);
  return userRequest;
}
