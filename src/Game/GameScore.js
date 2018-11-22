import React, { Component } from "react";

import { getScores, saveGameScore, resetGameScore } from "./GameService";

const prepScores = scores => {
  scores.sort((a, b) => b.score - a.score);

  return scores;
};

const GameScores = ({ scores }) => (
  <div style={{ marginBottom: "20px" }}>
    {prepScores(scores).map(({ username, score }, index) => (
      <div key={index}>
        <div style={{ float: "left" }}>{username}</div>
        <div style={{ float: "right" }}>{score}</div>
        <div style={{ clear: "both" }} />
      </div>
    ))}
  </div>
);

export default class GameScoreContainer extends Component {
  state = { scores: getScores() };

  handleAddScore = () => {
    const randomScore = {
      username: "Player",
      score: Math.round(Math.random() * 10)
    };

    console.log(this.state.scores);

    console.log(randomScore);
    saveGameScore(randomScore.username, randomScore.score);
    this.setState({ scores: [...this.state.scores, randomScore] });
  };

  handleResetStore = () => {
    resetGameScore();
    this.setState({ scores: [] });
  };

  render() {
    const { scores } = this.state;

    console.log(scores);

    return (
      <div style={{ width: "300px", margin: "0 auto" }}>
        <GameScores scores={scores} />
        <button onClick={this.handleAddScore}>Add Score</button>
        <button onClick={this.handleResetStore}>Reset Score</button>
      </div>
    );
  }
}
