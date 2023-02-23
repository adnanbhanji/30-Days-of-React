// index.js
// we will make random colors using a hexadecimal generator

import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return (
    <div className="top">
      <h2>Random Color Generator</h2>
      <h4>Day 4 Task 3</h4>
    </div>
  );
};

const Button = () => {
  const str = "0123456789abcdef"; // this contains all characters in a hex color code
  let col_str = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    col_str += str[index];
  }
  col_str = "#" + col_str;
  return (
    <div className="btn">
      <button
        style={{
          background: col_str,
          width: "50%",
          height: "100px",
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {col_str}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="main">
      <Title />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
