import React, { Component } from "react";
import questions from "../questions";
import Question from "./Question";

export default class Game extends Component {
  state = {
    currentQuestionIndex: 0,
    isGameFinished: false
  };

  handleAnswerSubmit = answer => {
    const { currentQuestionIndex } = this.props;
    const shouldChangeIndex =
      this.state.currentQuestionIndex + 1 > questions.length - 1;
    debugger;
    this.setState({
      currentQuestionIndex: shouldChangeIndex
        ? currentQuestionIndex + 1
        : currentQuestionIndex,
      isGameFinished: true
    });
  };

  render() {
    return (
      <div>
        {questions.map(question => (
          <Question {...question} submitAnswer={this.handleAnswerSubmit} />
        ))}
      </div>
    );
  }
}
