import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ increment }) => {
  return (
    <div className={s.btnS}>
      <button className={s.btn} onClick={increment}>
        Good
      </button>
      <button className={s.btn} onClick={increment}>
        Neutral
      </button>
      <button className={s.btn} onClick={increment}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
