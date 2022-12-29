import React from "react";

function Home(props) {
  const input = props.input;

  const nameChange = (name) => {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  };

  const firstName = nameChange(input.firstName);
  const lastName = nameChange(input.lastName);

  return (
    <section className="bg-white font-bold shadow-lg max-w-md mx-auto p-8 rounded-xl space-y-4">
      <h1 className="text-3xl  text-center">
        {` Welcome, ${firstName} ${lastName} `}
      </h1>
      <p className="text-center">
        We've sent a confirmation to your email {input.email}
      </p>
      <div className="flex justify-center">
        <button className="valid" onClick={props.logout}>
          Logout
        </button>
      </div>
    </section>
  );
}
export default Home;
