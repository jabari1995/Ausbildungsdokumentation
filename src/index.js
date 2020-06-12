import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const $app = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  $app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
