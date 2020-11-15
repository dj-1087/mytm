import React, { useEffect, useState } from "react";
import AppRouter from "routes/Router";
import Home from "routes/Home";

import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      if (init === false) {
        setInit(true);
      }
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <>
          <Home refreshUser={refreshUser} />
        </>
      ) : (
        <h1 id="loading">Loading</h1>
      )}
    </>
  );
}

export default App;
