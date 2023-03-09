import React, { useState } from "react";
import Jerry from "./images/Jerry.png";

function App() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const maxW = window.innerWidth - 300;
  const maxH = window.innerHeight - 300;
  const moveImage = () => {
    setPosition({
      x: Math.random() * maxW,
      y: Math.random() * maxH,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Day 11 - Events</h1>
        <br />
        <img
          src={Jerry}
          style={{ position: "absolute", left: position.x, top: position.y }}
          onMouseEnter={moveImage}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;
