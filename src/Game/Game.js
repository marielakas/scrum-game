import React, { Component } from "react";
import questions from "../questions";
import Question from "./Question";
import Result from "./Result";

const initialState = {
  currentQuestionIndex: 0,
  isGameFinished: false,
  correctAnswers: 0
};

export default class Game extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  resetQuiz = () => {
    this.setState(initialState);
  }

  isAnswerCorrect = (currentQuestionIndex, answer) => {
    if (questions[currentQuestionIndex].correctAnswer === answer) {
      return true;
    }
  }

  handleAnswerSubmit = answer => {
    const { currentQuestionIndex, correctAnswers } = this.state;
    const isGameFinished =
      this.state.currentQuestionIndex + 1 >= questions.length - 1;

    const isAnswerCorrect = this.isAnswerCorrect(currentQuestionIndex, answer);

    this.setState({
      currentQuestionIndex: !isGameFinished
        ? currentQuestionIndex + 1
        : currentQuestionIndex,
      correctAnswers: isAnswerCorrect ? correctAnswers + 1 : correctAnswers,
      isGameFinished
    });
  };

  render() {
    const { correctAnswers, isGameFinished, currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    console.log(this.props.username)

    return (
      <div>
        <Question {...currentQuestion} submitAnswer={this.handleAnswerSubmit} />
        { isGameFinished ? <Result numberOfRightAnswers={correctAnswers}/> : null}
        { isGameFinished && <button onClick={this.resetQuiz}>Reset</button>}
      </div>
    );
  }
}
