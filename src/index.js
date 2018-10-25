import React from "react";
import ReactDOM from "react-dom";
import Pyramid from "./Pyramid";

function App() {
  return <Pyramid />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
