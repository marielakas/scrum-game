import React from "react";
import ReactDOM from "react-dom";

import Question from "./Game/Question";

import Game from "./Game";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Scrum fun game</h1>
      <Game />
      <Question question="Why scrum" options={["a", "b", "c"]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
