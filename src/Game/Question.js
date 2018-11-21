import React from "react";

const Question = ({ question, options, submitAnswer }) => (
  <div class="question">
    <h2>{question}</h2>

    <div class="options">
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
          <span class="option">{option}</span>
        </div>
      ))}
    </div>

    <button
      class="btn btn-primary"
      onClick={() => {
        const answer = document.querySelector(
          `input[name="option-${question
            .toLowerCase()
            .trim()
            .replace(/\s/g, "-")}"]:checked`
        );

        if (!answer) {
          return;
        }

        return submitAnswer(answer.value);
      }}
    >
      submit answer
    </button>
  </div>
);

export default Question;
