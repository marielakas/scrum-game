import React, { Component } from "react";
import questions from "../questions";
import Question from "./Question";
import Result from "./Result";

export default class Game extends Component {
  state = {
    currentQuestionIndex: 0,
    isGameFinished: false,
    result: []
  };

  handleAnswerSubmit = answer => {
    const { currentQuestionIndex, result } = this.state;
    const hasNextQuestion =
      this.state.currentQuestionIndex + 1 >= questions.length - 1;

    this.setState({
      currentQuestionIndex: !hasNextQuestion
        ? currentQuestionIndex + 1
        : currentQuestionIndex,
      isGameFinished: hasNextQuestion,
      result: result.concat({ id: currentQuestionIndex, answer})
    });
  };

  render() {
    const { result, isGameFinished, currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div>
        <Question {...currentQuestion} submitAnswer={this.handleAnswerSubmit} />
        { isGameFinished ? <Result result={result}/> : null}
      </div>
    );
  }
}
