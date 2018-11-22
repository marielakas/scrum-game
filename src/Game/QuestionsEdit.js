import React, { Component } from "react";

import * as store from "../store";

const questions = store.get("questions");

console.log(questions);


export default class QuestionsEdit extends Component {
  state = { questions };
  render() {
    const { questions } = this.state;

    console.log(questions);

    return <div>{questions.map(q => q.id)}</div>;
  }
}
