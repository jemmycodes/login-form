import React from "react";

function Button(props) {
  return (
    <button className="gradient py-2 px-12 rounded-full text-white font-semibold">
      {props.children}
    </button>
  );
}
export default Button;
