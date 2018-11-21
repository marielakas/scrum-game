import React from "react";

const Question = ({ question, options, submitAnswer }) => (
  <div className="question">
    <h2>{question}</h2>

    <div className="options">
      {options.map(option => (
        <div>
          <input
            type="radio"
            name={`option-${question
              .toLowerCase()
              .trim()
              .replace(/\s/g, "-")}`}
            id={option}
            value={option}
            key={option}
          />
          <span className="option">{option}</span>
        </div>
      ))}
    </div>

    <button className="btn btn-primary" onClick={() => {}}>
      submit answer
    </button>
  </div>
);

export default Question;
