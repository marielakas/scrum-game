import React from "react";

import hardcodeQuestions from "../questions";

const Result = ({ result }) => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  hardcodeQuestions.forEach(question => {
    debugger
    if(result[question.id]) {
      if (question.correctAnswer === result[question.id].answer) {
        correctAnswers += 1;
      }
    wrongAnswers += 1;
    }
  });

  return (
    <div>
      You got {correctAnswers} correct and {wrongAnswers} wrong.
    </div>
  );
};

export default Result;
