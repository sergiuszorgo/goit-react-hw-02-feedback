import React from "react";
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentTotal: PropTypes.number.isRequired,
};
