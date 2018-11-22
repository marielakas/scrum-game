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

  render() {
    const { scores } = this.state;

    return (
      <div style={{ width: "300px", margin: "0 auto" }}>
        <GameScores scores={scores} />
      </div>
    );
  }
}
