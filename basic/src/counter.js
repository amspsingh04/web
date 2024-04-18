// src/Counter.js

import React, { Component } from 'react';

class Counter extends Component {
  // Initialize state
  state = { count: 0 };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

export default Counter;
