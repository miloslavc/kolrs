import React from "react";
import useAuth from "./api/useAuth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const user = useAuth();

  return user === null ? <Home /> : <Profile user={user} />;
}

export default App;
