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

  handleAnswerSubmit = result => {
    debugger;
    const { currentQuestionIndex } = this.state;
    const shouldChangeIndex =
      this.state.currentQuestionIndex + 1 >= questions.length - 1;

    this.setState({
      currentQuestionIndex: shouldChangeIndex
        ? currentQuestionIndex + 1
        : currentQuestionIndex,
      isGameFinished: true,
      result: this.state.result.concat(result)
    });
  };

  render() {
    const { result } = this.state;
    
    return (
      <div>
        {questions.map(question => (
          <Question {...question} submitAnswer={this.handleAnswerSubmit} />
        ))}
        { result && <Result result={result}/>}
      </div>
    );
  }
}
