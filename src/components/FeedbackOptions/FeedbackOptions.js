import React from "react";

const FeedbackOptions = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Good</button>
      <button onClick={increment}>Neutral</button>
      <button onClick={increment}>Bad</button>
    </div>
  );
};
export default FeedbackOptions;
