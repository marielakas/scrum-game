import React, { Component } from "react";

export default class StartScreen extends Component {
  constructor() {
    super();  
    this.state = {
      username: ""
    }
  }
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handleClick= () => {
    this.props.onStartClick(this.state.username);
  }

  render() {
    const { onStartClick } = this.props;

    console.log(this.state.username)
    return (
      <div className="start-screen-container">
        <div className="input-container">
          <input
            type="text"
            //class="form-control"
           //  placeholder="Username"
            //aria-label="Username"
            onChange={this.handleUsernameChange}
          />
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
