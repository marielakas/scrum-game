import React from "react";

/**
 * This is how a result question should look like:
 * <Question question="..." options={[]} readonly rightOption="" wrongOption="" />
 */

const getClassNames = (option, rightOption, wrongOption, readonly) => {
  if (readonly && rightOption === option) {
    return "btn btn-success";
  }

  if (readonly && wrongOption === option) {
    return "btn btn-danger";
  }

  return "btn btn-light";
};

const Question = ({
  question,
  options,
  submitAnswer,
  readonly,
  rightOption,
  wrongOption
}) => (
  <div className="question">
    <h2>{question}</h2>

    <div className="options">
      {options.map(option => (
        <div className="option" key={option}>
          <button
            disabled={readonly}
            onClick={() => submitAnswer(option)}
            class={getClassNames(option, rightOption, wrongOption, readonly)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Question;
