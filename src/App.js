import React from 'react';
import './App.css';
import TodoList from './todo';
import FormWithValidation from './form';
import BMICalculator from './bmi';
import CrosswordPuzzle from './cross';
import Shop from './cart';
import ImageCarousel from './imgcar';

function App() {
  return (
    <div className="App">
      
      <main>
        <TodoList />
        <BMICalculator />
        <FormWithValidation />
        <CrosswordPuzzle />
        <ImageCarousel images={['https://via.placeholder.com/150', 'https://via.placeholder.com/100', 'https://via.placeholder.com/50']} />
        <Shop/>
      </main>
    </div>
  );
}

export default App;
