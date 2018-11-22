import React from "react";

import hardcodeQuestions from "../questions";

const Result = ({ numberOfRightAnswers, onReset, onShowScores }) => {
  return (
    <div>
      <h1 class="result-title">
        You got {numberOfRightAnswers}/{hardcodeQuestions.length}.
      </h1>
      <div className="button-wrapper">
        <button className="btn btn-primary btn-lg" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn-primary btn-lg" onClick={onShowScores}>
          Show scoreboard
        </button>
      </div>
    </div>
  );
};

export default Result;
