import React, { Component } from "react";
import questions from "../questions";
import Question from "./Question";
import Result from "./Result";
import Counter from "./Counter";
import { saveGameScore } from './GameService';
import GameScore from './GameScore';

const initialState = {
  currentQuestionIndex: 0,
  isGameFinished: false,
  correctAnswers: 0,
  showScores: false
};

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isGameFinished && this.state.isGameFinished) {
      saveGameScore(this.props.username, this.state.correctAnswers);
    }
  }

  resetQuiz = () => {
    this.setState(initialState);
    this.props.resetQuiz();
  };

  showScores = () => {
    this.setState({ showScores: true });
  };

  isAnswerCorrect = (currentQuestionIndex, answer) => {
    if (questions[currentQuestionIndex].correctAnswer === answer) {
      return true;
    }
  };

  showQuizResults = () => {
    this.setState({ isGameFinished: true, showScores: false });
  };

  handleAnswerSubmit = answer => {
    const { currentQuestionIndex, correctAnswers } = this.state;
    const isGameFinished =
      this.state.currentQuestionIndex >= questions.length - 1;

    const isAnswerCorrect = this.isAnswerCorrect(currentQuestionIndex, answer);

    if (isAnswerCorrect) {
      questions[currentQuestionIndex] = {
        ...questions[currentQuestionIndex],
        rightOption: answer
      };
    } else {
      questions[currentQuestionIndex] = {
        ...questions[currentQuestionIndex],
        rightOption: questions[currentQuestionIndex].correctAnswer,
        wrongOption: answer
      };
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
    const {
      correctAnswers,
      isGameFinished,
      currentQuestionIndex,
      showScores
    } = this.state;
    const { username } = this.props;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div>
        { !isGameFinished && <Counter currentQuestionIndex={currentQuestionIndex}/> }
        {!isGameFinished && !showScores && (
          <Question
            {...currentQuestion}
            submitAnswer={this.handleAnswerSubmit}
          />
        )}
        {isGameFinished && !showScores ? (
          <Result
            numberOfRightAnswers={correctAnswers}
            onReset={this.resetQuiz}
            onShowScores={this.showScores}
          />
        ) : null}
        {isGameFinished &&
          !showScores &&
          questions.map(currentQuestion => (
            <Question key={currentQuestion.id} {...currentQuestion} readonly />
          ))}
        {isGameFinished && showScores && (
          <GameScore
            username={username}
            onResetClick={this.resetQuiz}
            onQuizResultsClick={this.showQuizResults}
          />
        )}
      </div>
    );
  }
}
