import React, { useState } from 'react';
import './App.css';

const texts = [
  "White Bread",
  "Whole Wheat\nTortillas",
  "Croissants",
  "Ciabatta"
];

function App() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleNextText = () => {
    const newIndex = currentTextIndex + 1 < texts.length ? currentTextIndex + 1 : 0;
    setCurrentTextIndex(newIndex);
  };

  return (
    <div className="container">
      <h1 className="title">{texts[currentTextIndex]}</h1>
      <button className="button" onClick={handleNextText}>Next Text</button>
    </div>
  );
}

export default App;
