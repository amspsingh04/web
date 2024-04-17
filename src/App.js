import React from 'react';
import './App.css';
import TodoList from './todo';
import BMICalculator from './bmi';

function App() {
  return (
    <div className="App">
      
      <main>
        <TodoList />
        <BMICalculator />
      </main>
    </div>
  );
}

export default App;
