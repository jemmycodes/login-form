import { useState, useEffect } from "react";
import React from "react";

const authenticationContext = React.createContext({
  isLoggedIn: false,
  onLoggedOut: () => {},
  onLogin: (firstname, lastname, email, password) => {},
});

export const AuthenticationContext = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInInfo = localStorage.getItem("isLoggedIn");
    if (loggedInInfo === "loggedin") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "loggedin");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <authenticationContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLoggedOut: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </authenticationContext.Provider>
  );
};

export default authenticationContext;
