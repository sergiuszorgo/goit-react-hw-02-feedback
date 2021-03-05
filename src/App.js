import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div className="App">
        <h1>Cafe Expresso</h1>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Dad</button>
        </div>
        <div>
          <ul>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Dad:</li>
            <li>Total:</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
