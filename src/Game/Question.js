import React from "react";

const Question = ({ question, options, submitAnswer }) => (
  <div className="question">
    <h2>{question}</h2>

    <div className="options">
      {options.map(option => (
        <div className="option" key={option}>
          <button onClick={() => submitAnswer(option)} class="btn btn-light">
            {option}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Question;
