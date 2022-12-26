import React from "react";
const MouseHoverCounter = (props) => {
  let dis = {
    display: " flex",
    fontWeight: "bold",
    marginBottom: "0.1rem",
    color: " yellow",
    justifyContent: "center",
  };
  return (
    <div style={dis}>
      <div>{props.count}</div>
      <button onMouseOver={props.increment}>MouseeHover</button>
    </div>
  );
};

export default MouseHoverCounter;
