import React from "react";
function ScoreBoard({ score }) {
  return (
    <div className="alert alert-info text-center" role="alert">
      Score: {score}
    </div>
  );
}
export default ScoreBoard;