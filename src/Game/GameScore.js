import React, { Component } from "react";

import { getScores, saveGameScore, resetGameScore } from "./GameService";

const prepScores = scores => {
  return scores.sort((a, b) => b.score - a.score);
};

export default class GameScoreContainer extends Component {
  state = { scores: getScores() };

  render() {
    const scores = this.state.scores.slice(0, 5);
    const { onResetClick, onQuizResultsClick } = this.props;

    return (
      <div className="card" style={{ width: 500 }}>
        <h5
          className="card-title"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          Top 5 Scrum Masters :)
        </h5>
        <div className="card-body">
          {prepScores(scores).map(({ username, score }, index) => (
            <div
              className={`board-item ${
                username === this.props.username ? "winner" : ""
              }`}
              key={index}
            >
              <div style={{ float: "left" }}>{username}</div>
              <div style={{ float: "right" }}>{score}</div>
              <div style={{ clear: "both" }} />
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <button className="btn btn-primary btn-lg" onClick={onResetClick}>
            New Game
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={onQuizResultsClick}
          >
            Back Quiz results
          </button>
        </div>
      </div>
    );
  }
}
