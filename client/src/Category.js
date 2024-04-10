import React from "react";
import QuestionCard from "./QuestionCard";
function Category({ category, updateScore }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">{category.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {category.questions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question}
              updateScore={updateScore}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Category;