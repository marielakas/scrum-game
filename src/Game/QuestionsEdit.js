import React, { Component } from "react";

import * as store from "../store";

const questions = store.getItem("questions");

console.log(questions);

/*
store.setItem("questions", [
  {
    id: 1,
    question: "Q1"
  },
  { id: 2, questions: "Q2" }
]);
*/

export default class QuestionsEdit extends Component {
  state = { questions };
  render() {
    const { questions } = this.state;

    console.log(questions);

    return <div>{questions.map(q => q.id)}</div>;
  }
}
