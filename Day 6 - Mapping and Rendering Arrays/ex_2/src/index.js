import React from "react";
import ReactDOM from "react-dom";

const createArr = () => {
  let arr = [];
  for (let i = 0; i < 32; i++) {
    arr.push(i);
  }
  return arr;
};

const MapBox = ({ nums }) => {
  return nums.map((num) => {
    const checkBox = () => {
      let c1 = "#35BF5F";
      let c2 = "#E67D61";
      let c3 = "#D8DC4D";
      if (num === 0) {
        return c1;
      } else if (num === 1) {
        return c3;
      } else if (num === 2) {
        return c2;
      } else if (num % 2 === 0) {
        return c1;
      } else {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
          if (num % i === 0) {
            return c3;
          }
        }
        return c2;
      }
    };

    return (
      <div
        style={{
          border: "none",
          padding: "35px",
          fontSize: "30px",
          textAlign: "center",
          background: checkBox(),
          color: "whitesmoke",
          fontWeight: 2000,
        }}
        key={num}
      >
        {num}
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
        <h3 style={{ fontSize: 25 }}> Number Generator</h3> <br />
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
        <MapBox nums={createArr()} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
