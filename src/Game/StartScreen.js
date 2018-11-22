import React, { Component } from "react";

export default class StartScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handleClick = () => {
    this.props.onStartClick(this.state.username);
  };

  render() {
    const { error } = this.props;

    return (
      <div className="start-screen-container card">
        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              onChange={this.handleUsernameChange}
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm start-game-button"
            disabled={this.state.username === ""}
            onClick={this.handleClick}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }
}
