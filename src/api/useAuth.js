import { useState, useEffect } from "react";
import { db, firebase } from "../firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(appUser => {
      if (appUser) {
        const user = {
          displayName: appUser.displayName,
          photoURL: appUser.photoURL,
          uid: appUser.uid,
          email: appUser.email
        };
        setUser(user);

        db.collection("users")
          .doc(user.uid)
          .set(user, { merge: true });
      } else {
        setUser(null);
      }
    });
  }, []);
  return user;
}
