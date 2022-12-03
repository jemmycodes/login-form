import React from "react";
import { useContext } from "react";
import authenticationContext from "../store/authentication-context";

function Home() {
  const ctx = useContext(authenticationContext);
  return (
    <section className="bg-white font-bold shadow-lg max-w-md mx-auto p-8 rounded-xl space-y-4">
      <h1 className="text-3xl  text-center">Welcome, User😉.</h1>
      <p className="text-center">
        We've sent a confirmation to your email yourname@gmail.com
      </p>
      <div className="flex justify-center">
        <button
          onClick={ctx.onLoggedOut}
          className="gradient py-2 px-12 rounded-full text-white font-semibold"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
export default Home;
