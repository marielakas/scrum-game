import React from "react";

import hardcodeQuestions from "../questions";

const Result = questions => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  hardcodeQuestions.forEach(question => {
    if (question.correctAnswer === question.answered) {
      correctAnswers += 1;
    }
    wrongAnswers += 1;
  });

  return (
    <div>
      You got {correctAnswers} correct and {wrongAnswers} wrong.
    </div>
  );
};

export default Result;
