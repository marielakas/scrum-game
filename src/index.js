import React from "react";
import ReactDOM from "react-dom";

import Game from "./Game";

import "./styles.css";

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h1 class="title">Scrum fun game</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Game />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
