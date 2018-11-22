import React, { Component } from "react";
import {
  getQuestions,
  addQuestion,
  removeQuestion
} from "./QuestionsEditService";

export default class QuestionsEdit extends Component {
  state = { questions: getQuestions() };

  handleQuestionAdd = question => {
    this.setState({ questions: addQuestion(question) });
  };

  handleQuestionDelete = id => {
    this.setState({ questions: removeQuestion(id) });
  };

  render() {
    const { questions } = this.state;

    console.log(questions);

    return (
      <div>
        <QuestionList
          questions={questions}
          onDeleteQuestion={this.handleQuestionDelete}
        />
        <QuestionAdd onQuestionAdd={this.handleQuestionAdd} />
      </div>
    );
  }
}

const QuestionList = ({ onDeleteQuestion, questions }) => (
  <div>
    {questions.map(({ id, question, options, correctAnswer }) => (
      <div
        style={{
          borderBottom: "1px solid #000",
          marginBottom: "10px",
          paddingBottom: "10px"
        }}
      >
        <b>{id}</b> | {question} | [
        <a href="javascript:;" onClick={() => onDeleteQuestion(id)}>
          Delete
        </a>
        ] <br />
        {console.log(options) ||
          options.map(option => (
            <div>
              <span
                style={{
                  fontWeight: correctAnswer === option ? "bold" : "normal"
                }}
              >
                {option}
              </span>
            </div>
          ))}
      </div>
    ))}
  </div>
);

class QuestionAdd extends Component {
  state = {
    question: "",
    answers: [],
    correctAnswer: 0
  };
  handleAnswerAdd = () => {
    this.setState({ answers: [...this.state.answers, ""] });
  };
  handleAnswerRemove = index => {
    console.log(this.state, index);
    if (this.state.correctAnswer === index) {
      this.setState({ correctAnswer: 0 });
    }

    this.setState({
      answers: [
        ...this.state.answers.slice(0, index),
        ...this.state.answers.slice(index + 1)
      ]
    });
  };
  handleQuestionChange = ({ target: { value } }) => {
    this.setState({ question: value });
  };
  handleAnswerChange = index => ({ target: { value } }) => {
    this.setState({
      answers: [
        ...this.state.answers.slice(0, index),
        value,
        ...this.state.answers.slice(index + 1)
      ]
    });
  };
  handleCorrectAnswer = ({ target: { value } }) => {
    this.setState({ correctAnswer: Number(value) });
  };
  handleAddQuestion = () => {
    const { question, answers, correctAnswer } = this.state;

    if (question.length < 5) {
      this.setState({ error: "Question too short." });
      return;
    }

    if (answers.length < 2) {
      this.setState({ error: "At least two answers." });
      return;
    }

    for (let i in answers) {
      if (answers[i].length < 2) {
        this.setState({ error: `Answer ${i} is too short.` });
        return;
      }
    }

    this.props.onQuestionAdd({
      question,
      options: answers,
      correctAnswer: answers[correctAnswer]
    });
  };
  render() {
    const { question, answers, correctAnswer, error } = this.state;

    return (
      <div>
        {error && (
          <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>
        )}
        <input
          type="text"
          placeholder="question"
          onChange={this.handleQuestionChange}
          value={question}
        />
        {!!answers.length && (
          <table>
            <tr>
              <th>answer</th>
              <th>correct</th>
              <th>&nbsp;</th>
            </tr>
            {answers.map((answer, i) => (
              <tr>
                <td>
                  <input
                    key={i}
                    type="text"
                    placeholder={`Answer ${i + 1}`}
                    onChange={this.handleAnswerChange(i)}
                    value={answer}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="correctAnswer"
                    value={i}
                    checked={i === correctAnswer}
                    onChange={this.handleCorrectAnswer}
                  />
                </td>
                <td>
                  {answers.length > 2 && [
                    <button onClick={() => this.handleAnswerRemove(i)}>
                      X
                    </button>
                  ]}
                </td>
              </tr>
            ))}
          </table>
        )}
        {answers.length < 4 && (
          <div style={{ marginBottom: "15px" }}>
            <button onClick={this.handleAnswerAdd}>Add answer</button>
          </div>
        )}
        <button onClick={this.handleAddQuestion}>Add Question</button>
      </div>
    );
  }
}

/*

id: 0,
question: "In an organization that embraces Agile values, who would be responsible for tool selection and configuration?",
options: ["The teams, who would have to coordinate with each other", "The ScrumMasters, who would have to coordinate with each other"],
correctAnswer: "The teams, who would have to coordinate with each other"

*/
