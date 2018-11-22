import React from "react";
import ReactDOM from "react-dom";

import Game from "./Game";

import "./styles.css";

function App() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col">
        <marquee direction="down" width="100%" height="200" behavior="alternate">
          <marquee behavior="alternate">
          <h1 className="title">Scrum fun game (real fun) v2<br /> (now even more fun)</h1>
          </marquee>
        </marquee>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Game />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
