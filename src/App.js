import React from "react";
// import { Router } from "@reach/router";

//api
import useAuth from "./api/useAuth";

//pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";

//components
import Loader from "./components/Loader";
import { UserContext } from "./context/UserContext";

function App() {
  const { loading, user } = useAuth();

  return loading ? (
    <Loader />
  ) : user === null ? (
    <Home />
  ) : (
    <UserContext.Provider
      value={{
        user
      }}
    >
      <Profile />
    </UserContext.Provider>
  );

  // router
  // return (
  //       <Router>
  //     {loading ? (
  //       <Loader path="/" />
  //     ) : user === null ? (
  //       <Home path="/" />
  //     ) : (
  //       <Profile path="/" user={user} />
  //     )}
  //      <NotFound default />
  //      </Router>
  // );
}

export default App;
