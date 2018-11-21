import React from "react";
import ReactDOM from "react-dom";

import Game from "./Game";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Scrum fun game</h1>
      <Game />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
