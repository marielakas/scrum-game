import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getScores, saveGameScore } from "./Game/GameService";

import Game from "./Game";
import StartScreen from "./Game/StartScreen";

import "./styles.css";
import "./christmas.css";

class App extends Component {
  state = { isGameStarted: false, username: "" };

  constructor(props) {
    super(props);

    if (window.location.search.includes('christmas')) {
      document.querySelector('html').className = "christmas-theme";
    }
  }

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
        <div className="background"></div>
        <div class="row">
          <div class="col">
            <marquee
              direction="down"
              width="100%"
              height="400"
              behavior="alternate"
            >
              <marquee behavior="alternate">
                <h1 className="title">
                  Scrum fun game (real fun) v3
                  <br /> (now even more fun)
                  <br /> (who knew it could get even funnier)
                  <div className="christmas-text"><br /> christmas edition 🎄🎅🏼</div>
                  <div className="raketa-text"><br /> raketa edition 🚀😞</div>
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
