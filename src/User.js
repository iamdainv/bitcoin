import React from "react";

export default function User(props) {
  return (
    <div>
      <button onClick={props.history.push("/")}></button>
      hello user{" "}
    </div>
  );
}
