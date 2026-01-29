import React from "react";

export default function Conditional(props) {
  return (
    <h2>
      {props.isLoggedIn ? "Welcome User" : "Please Login"}
    </h2>
  );
}
