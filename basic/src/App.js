// src/App.js

import React from 'react';
import './App.css';
import Header from './header';
import Counter from './counter';
import Greeting from './greeting';
import Button from './button';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Greeting name="John" />
      <Button />
    </div>
  );
}

export default App;
