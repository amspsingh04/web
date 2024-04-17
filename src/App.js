import React from 'react';
import './App.css';
import TodoList from './todo';
import FormWithValidation from './form';
import BMICalculator from './bmi';
import CrosswordPuzzle from './cross';

function App() {
  return (
    <div className="App">
      
      <main>
        <TodoList />
        <BMICalculator />
        <FormWithValidation />
        <CrosswordPuzzle />
      </main>
    </div>
  );
}

export default App;
