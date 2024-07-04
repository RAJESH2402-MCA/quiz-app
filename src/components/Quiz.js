import React from 'react';

function Quiz({ question, handleAnswerOptionClick }) {
  return (
    <div className="quiz">
      <h2>{question.questionText}</h2>
      <div className="answer-options">
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;