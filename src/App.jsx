import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({});

  const loginHandler = (data) => {
    setIsLoggedIn(true);
    setData(data);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <section className="gradient flex min-h-screen p-8 items-center ">
      {isLoggedIn && (
        <Home loggedIn={loginHandler} input={data} logout={logoutHandler} />
      )}
      {!isLoggedIn && <Login onLogin={loginHandler} />}
    </section>
  );
}

export default App;
