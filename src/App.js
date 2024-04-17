import React from 'react';
import './App.css';
import TodoList from './todo';
import FormWithValidation from './form';
import BMICalculator from './bmi';

function App() {
  return (
    <div className="App">
      
      <main>
        <TodoList />
        <BMICalculator />
        <FormWithValidation />
      </main>
    </div>
  );
}

export default App;
