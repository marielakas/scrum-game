import React from "react";
import ReactDOM from "react-dom";

import Game from "./Game";

import "./styles.css";

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
        <marquee direction="down" width="100%" height="200" behavior="alternate">
          <marquee behavior="alternate">
          <h1 class="title">Scrum fun game (real fun)</h1>
          </marquee>
        </marquee>
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
