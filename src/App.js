import React from 'react';
import './App.css';
import TodoList from './todo';
import FormWithValidation from './form';
import BMICalculator from './bmi';
import CrosswordPuzzle from './cross';
import ImageCarousel from './imgcar';

function App() {
  return (
    <div className="App">
      
      <main>
        <TodoList />
        <BMICalculator />
        <FormWithValidation />
        <CrosswordPuzzle />
        <ImageCarousel images={['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']} />
      </main>
    </div>
  );
}

export default App;
