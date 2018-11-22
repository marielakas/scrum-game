import React from "react";

import hardcodeQuestions from "../questions";

const Result = ({ numberOfRightAnswers }) => {

  return (
    <div>
      You got {numberOfRightAnswers}/{hardcodeQuestions.length}.
    </div>
  );
};

export default Result;
