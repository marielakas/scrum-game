import React, { Component } from "react";
import questions from "../questions";
import Question from "./Question";
import Result from "./Result";
import { saveGameScore } from './GameService';

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

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isGameFinished && this.state.isGameFinished) {
      saveGameScore(this.props.username, this.state.correctAnswers)
    }
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
      this.state.currentQuestionIndex >= questions.length - 1;

    const isAnswerCorrect = this.isAnswerCorrect(currentQuestionIndex, answer);

    if (isAnswerCorrect) {
      questions[currentQuestionIndex] = {
        ...questions[currentQuestionIndex],
        rightOption: answer
      }
    } else {
      questions[currentQuestionIndex] = {
        ...questions[currentQuestionIndex],
        rightOption: questions[currentQuestionIndex].correctAnswer,
        wrongOption: answer
      }
    }

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

    return (
      <div>
        { !isGameFinished && <Question {...currentQuestion} submitAnswer={this.handleAnswerSubmit} /> }
        { isGameFinished ? <Result numberOfRightAnswers={correctAnswers}/> : null}
        <div className="button-wrapper">
          { isGameFinished && <button className="btn btn-primary btn-lg" onClick={this.resetQuiz}>Reset</button>}
          { isGameFinished && <button className="btn btn-primary btn-lg" onClick={this.showScoreboard}>Show scoreboard</button>}
        </div>
        { isGameFinished && questions.map(currentQuestion => <Question {...currentQuestion} readonly />)}
      </div>
    );
  }
}
