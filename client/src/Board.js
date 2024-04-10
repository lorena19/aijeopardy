import React, { useState, useEffect } from "react";
import Category from "./Category";
import ScoreBoard from "./ScoreBoard";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
function Board() {
  const [categories, setCategories] = useState([]);
  const [score, setScore] = useState(0);
  // Function to update the score
  const updateScore = (value) => {
    setScore(score + value);
  };
  useEffect(() => {
    // Fetch categories and their questions from the backend
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="container mt-5">
      <ScoreBoard score={score} />
      <div className="row justify-content-center">
        {categories.map((category) => (
          <Category
            key={category._id}
            category={category}
            updateScore={updateScore}
          />
        ))}
      </div>
    </div>
  );
}
export default Board;