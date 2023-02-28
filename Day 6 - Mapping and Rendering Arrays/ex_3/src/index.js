// making the hexadecimal display

import React from "react";
import ReactDOM from "react-dom";

const createArr = () => {
  let arr = [];
  for (let i = 0; i < 32; i++) {
    arr.push(i);
  }
  return arr;
};

const MapBox = ({ nums, str }) => {
  return nums.map((num) => {
    const colorFunction = () => {
      let col_str = "";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        col_str += str[index];
      }
      col_str = "#" + col_str;
      return col_str;
    };

    const final_col_val = colorFunction();
    return (
      <div
        style={{
          border: "none",
          padding: "35px",
          fontSize: "20px",
          textAlign: "center",
          background: final_col_val,
          color: "whitesmoke",
          fontWeight: 1000,
        }}
        key={num}
      >
        {final_col_val}
      </div>
    );
  });
};

const App = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="text"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{ fontSize: 45, fontFamily: "fantasy", marginBottom: "-10px" }}
        >
          30 Days React
        </h1>
        <h3 style={{ fontSize: 25 }}> Color Generator</h3> <br />
      </div>

      <div
        className="contain"
        style={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "auto auto auto auto auto auto auto auto",
          backgroundColor: "whitesmoke",
          padding: "10px",
        }}
      >
        <MapBox nums={createArr()} str="0123456789abcdef" />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
