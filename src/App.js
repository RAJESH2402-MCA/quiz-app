import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const [questions, setQuestions] = useState([
    {
      questionText: 'What is the capital of india?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'delhi', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Indian golf?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Ms Dhoni', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h1>Your Score: {score}</h1>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default App;