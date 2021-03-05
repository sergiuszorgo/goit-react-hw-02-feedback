import React from "react";

const Statistics = ({ good, neutral, bad, total, percentTotal }) => (
  <div>
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive Feedback: {percentTotal}%</li>
    </ul>
  </div>
);

export default Statistics;
