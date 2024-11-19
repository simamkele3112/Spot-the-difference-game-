import React, { useState, useEffect } from 'react';
import './App.css';
import Sima1 from './images/Sima1.jpg';
import Sima2 from './images/Sima2.jpg';


// Define the coordinates of differences
const differences = [
  { id: 1, x: 202, y: 126 },
  { id: 2, x: 80, y: 155 },
  { id: 3, x: 115, y: 300 },
  { id: 4, x: 66, y: 415 }
];

function App() {
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [timer, setTimer] = useState(60); // 60-second countdown
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (foundDifferences.length === differences.length) {
      setGameOver(true);
    }
  }, [foundDifferences]);

  // Timer logic
  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0 && !gameOver) {
      setGameOver(true);
    }
  }, [timer, gameOver]);

  
  // Check if the user clicked near a defined difference
  const handleClick = (event) => {
    if (gameOver) return;

    const { offsetX, offsetY } = event.nativeEvent;
    let found = false;

    differences.forEach((diff) => {
      const isNearby = Math.abs(offsetX - diff.x) < 15 && Math.abs(offsetY - diff.y) < 15;

      if (isNearby && !foundDifferences.includes(diff.id)) {
        setFoundDifferences((prev) => [...prev, diff.id]);
        found = true;
      }
    });

    
  };

  return (
    <div className="App">
      <h1>Spot the Difference Game</h1>
      <div className="status-bar">
        <p>Timer: {timer}s</p>
        <p>Found: {foundDifferences.length}/{differences.length}</p>
      </div>
      <div className="game-container">
        <div className="image-container" onClick={handleClick}>
          <img src={Sima1} alt="Image 1" className="game-image" />
          {differences.map((diff) =>
            foundDifferences.includes(diff.id) ? (
              <div
                key={diff.id}
                className="marker"
                style={{ left: diff.x, top: diff.y }}
              />
            ) : null
          )}
        </div>

        <div className="image-container" onClick={handleClick}>
          <img src={Sima2} alt="Image 2" className="game-image" />
          {differences.map((diff) =>
            foundDifferences.includes(diff.id) ? (
              <div
                key={diff.id}
                className="marker"
                style={{ left: diff.x, top: diff.y }}
              />
            ) : null
          )}
        </div>
      </div>
      {gameOver && (
        <div className="game-over">
          {foundDifferences.length === differences.length ? (
            <p>Congratulations! You've found all differences!</p>
          ) : (
            <p>Time's up! Game Over.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
