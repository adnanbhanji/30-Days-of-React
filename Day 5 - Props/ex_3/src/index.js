// index.js
// use props

import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return (
    <div className="top">
      <h2>Random Color Generator</h2>
      <h4>Day 5 Task 3 - Props</h4>
    </div>
  );
};

const Button = ({ str }) => {
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
      <Button str="0123456789abcdef" /> <Button str="0123456789abcdef" />{" "}
      <Button str="0123456789abcdef" /> <Button str="0123456789abcdef" />{" "}
      <Button str="0123456789abcdef" />{" "}
      {/*this contains all characters in a hex color code */}
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
