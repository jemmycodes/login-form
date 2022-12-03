import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { useContext } from "react";
import authenticationContext from "./components/store/authentication-context";

function App() {
  const ctx = useContext(authenticationContext);

  return (
    <section className="gradient flex min-h-screen p-8 items-center ">
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </section>
  );
}

export default App;
