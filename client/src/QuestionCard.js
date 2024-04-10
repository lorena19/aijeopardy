import React, { useState } from "react";
function QuestionCard({ question, updateScore }) {
  const [visible, setVisible] = useState(false);
  const [answered, setAnswered] = useState(false);
  const handleAnswer = (correct) => {
    if (!answered) {
      updateScore(correct ? question.value : -question.value);
      setAnswered(true);
      setVisible(false); // Optionally hide the question after answering
    }
  };
  return (
    <li className="list-group-item">
      {visible ? (
        <>
          <p>{question.question}</p>
          <button
            className="btn btn-success me-2"
            onClick={() => handleAnswer(true)}
          >
            Correct
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleAnswer(false)}
          >
            Incorrect
          </button>
        </>
      ) : (
        <button
          className="btn btn-primary w-100"
          onClick={() => setVisible(true)}
        >
          {question.value}
        </button>
      )}
    </li>
  );
}
export default QuestionCard;