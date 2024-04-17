import React, { useState } from 'react';
import './App.css'; // Assuming you have styles in App.css for App

function App() {
  // Set up state for the counter
  const [count, setCount] = useState(0);

  // Decrease count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Increase count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Counter</h1>
        <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <span className="count">{count}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
