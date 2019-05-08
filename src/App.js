import React from "react";
import useAuth from "./api/useAuth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Loader from "./pages/Loader";
function App() {
  const { loading, user } = useAuth();

  return loading ? (
    <Loader />
  ) : user === null ? (
    <Home />
  ) : (
    <Profile user={user} />
  );
}

export default App;
