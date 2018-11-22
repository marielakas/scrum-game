import React from 'react';

import questions from '../questions';

const Counter = ({ currentQuestionIndex }) => {

  return (
    <div class="counter">
      {currentQuestionIndex + 1}/{questions.length}
    </div>
  )
}

export default Counter;