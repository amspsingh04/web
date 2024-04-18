import React, { useState } from 'react';
import './crossword.css'; // Assume some basic styling for the grid

// Initial grid data structure (using 0 for blanks and providing some words)
const initialGrid = [
  ["H", "E", "L", "L", "O"],
  [0, 0, "E", 0, 0],
  [0, 0, "L", 0, 0],
  ["W", "O", "R", "L", "D"],
  [0, 0, "D", 0, 0]
];

const CrosswordGrid = ({ grid, updateGrid }) => {
  return (
    <div className="crossword-grid">
      {grid.map((row, rowIndex) => (
        <div className="crossword-row" key={`row-${rowIndex}`}>
          {row.map((cell, cellIndex) => (
            <input
              key={`cell-${rowIndex}-${cellIndex}`}
              type="text"
              value={cell === 0 ? '' : cell}
              onChange={(e) => updateGrid(rowIndex, cellIndex, e.target.value)}
              maxLength={1}
              className="crossword-cell"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const CrosswordPuzzle = () => {
  const [grid, setGrid] = useState(initialGrid);

  const updateGrid = (row, col, value) => {
    // Clone the grid to create a new state
    const newGrid = grid.map(row => row.slice());
    // Update the letter in the cloned grid
    newGrid[row][col] = value.toUpperCase();
    // Update the state
    setGrid(newGrid);
  };

  return (
    <div>
      <h1>Crossword Puzzle!</h1>
      <CrosswordGrid grid={grid} updateGrid={updateGrid}/>
      <div className="crossword-clues">
        <div>
          <strong>Across</strong>
          <p>1. A common greeting (5)</p>
          <p>3. Not just a planet (5)</p>
        </div>
        <div>
          <strong>Down</strong>
          <p>1. A type of programming language (5)</p>
        </div>
      </div>
    </div>
  );
};

export default CrosswordPuzzle;
