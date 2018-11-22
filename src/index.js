import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getScores, saveGameScore } from "./Game/GameService";

import Game from "./Game";
import StartScreen from "./Game/StartScreen";

import "./styles.css";

class App extends Component {
  state = { isGameStarted: false, username: "" };

  handleStartClick = username => {
    this.setState({ isGameStarted: true, username });
  };

  handleReset = () => {
    this.setState({ isGameStarted: false, username: "" });
  };
  render() {
    const { isGameStarted, username } = this.state;

    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <marquee
              direction="down"
              width="100%"
              height="200"
              behavior="alternate"
            >
              <marquee behavior="alternate">
                <h1 className="title">
                  Scrum fun game (real fun) v2
                  <br /> (now even more fun)
                </h1>
              </marquee>
            </marquee>
          </div>
        </div>
        <div class="row">
          <div class="col game-container">
            {isGameStarted ? (
              <Game username={username} resetQuiz={this.handleReset} />
            ) : (
              <StartScreen onStartClick={this.handleStartClick} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
