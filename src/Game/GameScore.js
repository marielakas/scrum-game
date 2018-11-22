import React, { Component } from "react";

import { getScores, saveGameScore, resetGameScore } from "./GameService";

const GameScores = ({ scores }) => (
  <div>
    {scores.map(({ username, score }) => (
      <div>
        <span>{username}</span>
        <span>{score}</span>
      </div>
    ))}
  </div>
);

export default class GameScoreContainer extends Component {
  state = { scores: getScores() || [] };

  handleAddScore = () => {
    const randomScore = {
      username: "Player",
      score: Math.round(Math.random() * 10)
    };

    console.log(this.state.scores);

    saveGameScore(randomScore);
    this.setState({ scores: [...this.state.scores, randomScore] });
  };

  handleResetStore = () => {
    resetGameScore();
    this.setState({ scores: [] });
  }

  render() {
    const { scores } = this.state;

    console.log(scores);

    return (
      <div>
        <GameScores scores={scores} />
        <button onClick={this.handleAddScore}>Add Score</button>
        <button onClick={this.handleResetStore}>Reset Score</button>
      </div>
    );
  }
}
