import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

// const FeedbackOptions = ({ increment }) => {
//   return (
//     <div className={s.btnS}>
//       <button className={s.btn} onClick={increment}>
//         Good
//       </button>
//       <button className={s.btn} onClick={increment}>
//         Neutral
//       </button>
//       <button className={s.btn} onClick={increment}>
//         Bad
//       </button>
//     </div>
//   );
// };

const FeedbackOptions = ({ options, increment }) => {
  const nameBtn = Object.keys(options);
  return (
    <div className={s.btnS}>
      {nameBtn.map((button) => (
        <button key={button} className={s.btn} onClick={increment}>
          {button}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  increment: PropTypes.func,
};
