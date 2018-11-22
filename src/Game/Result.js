import React from "react";

import hardcodeQuestions from "../questions";

const Result = ({ numberOfRightAnswers }) => {

  return (
    <h1 class="result-title">
      You got {numberOfRightAnswers}/{hardcodeQuestions.length}.
    </h1>
  );
};

export default Result;
