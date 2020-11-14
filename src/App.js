import React, { useEffect, useState } from "react";
import AppRouter from "routes/Router";
import { authService } from "fbase";
import { objectToLocalStorage } from "init";

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
      objectToLocalStorage("user", userObj);
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
    objectToLocalStorage("user", userObj);
  };
  return (
    <>
      {init ? (
        <>
          <AppRouter refreshUser={refreshUser} />
        </>
      ) : (
        <div id="loading">
          <img id="loading-image" src="img/ajax-loader.gif" alt="Loading..." />
        </div>
      )}
    </>
  );
}

export default App;
