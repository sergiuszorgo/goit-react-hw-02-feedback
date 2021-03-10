import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleImcrement = (e) => {
    const nameOfButton = e.target.textContent.toLowerCase();
    this.setState((prevState) => {
      for (const key in prevState) {
        if (key === nameOfButton) {
          return { [key]: prevState[key] + 1 };
        }
      }
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.state.good
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentTotal = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <h1>Cafe Expresso</h1>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            increment={this.handleImcrement}
          />
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentTotal={percentTotal}
            />
          ) : (
            <Notification message={"No feetback given"} />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default App;
