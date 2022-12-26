import React from "react";
import Card from "../UI/Card";
const ClickCounter = (props) => {
  let dis = {
    display: " flex",
    fontWeight: "bold",
    marginBottom: "0.1rem",
    color: " yellow",
    justifyContent: "center",
    flexdirection: "row",
  };
  return (
    <div style={dis}>
      <div>{props.count}</div>
      <button onClick={props.increment}>Click</button>
    </div>
  );
};

export default ClickCounter;
