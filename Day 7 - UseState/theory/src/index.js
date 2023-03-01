// useState hook
// used to track and change the state of different items in functional components
// first we need to import the useState hook. we do so in line 7 below.

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import jerry from "./images/Jerry.png";
import tom from "./images/Tom.png";

// we have imported the useState hook with destructuring

// const App = () => {
//   // declare the useState hook. set the initial state of the count variable to 0.
//   //Whenever we want to change it, we can use the usestate.
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {/* We can add two buttons, and in the onclick, we can add an arrow function that allows us to increase the
//       count by 1 everytime we click on it. So in the arrow function, we use the setCount function that we made and set the count to
//       + 1 of the current count. That way we are keeping track of the state and updating it. We can also make the same but for
//       decrementing the count  */}
//       <button onClick={() => setCount(count + 1)}>Add 1</button> <br /> <br />
//       <button onClick={() => setCount(count - 1)}>
//         Subtract 1
//       </button> <br /> <br />
//       <span>{count}</span> <br /> <br />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// we can also make them seperate functions outside the onclick parameter, and then just pass the function name, as shown below.

// const App = () => {
//   // declare the useState hook. set the initial state of the count variable to 0.
//   //Whenever we want to change it, we can use the usestate.
//   const [count, setCount] = useState(0);
//   const increaseCount = () => {
//     setCount(count + 1);
//   };
//   const decreaseCount = () => {
//     setCount(count - 1);
//   };
//   // making functions like this makes the code cleaner and easier to read / maintain.
//   return (
//     <div>
//       <button onClick={increaseCount}>Add 1</button> <br /> <br />
//       <button onClick={decreaseCount}>Subtract 1</button> <br /> <br />
//       <span>{count}</span> <br /> <br />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// now we will make a mini cat and dog application use states. in this we will set the initial state to cat,
// and when a button is clicked, the image will switch. this will continue as many times as the button is clicked.

const App = () => {
  const [character, setCharacter] = useState(jerry);
  const changeCharacter = () => {
    let result;
    result = character === jerry ? tom : jerry;
    setCharacter(result);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "snow",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        className="text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontFamily: "revert", fontSize: 30, fontWeight: 100 }}>
          30 Days of React
        </h2>
        <h3 style={{ fontFamily: "revert-layer", fontWeight: 50 }}>
          UseState Hook
        </h3>
      </div>
      <div className="image" style={{ width: 400, height: 400 }}>
        <img
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={character}
          alt="char"
        />
      </div>
      <button
        style={{
          height: 40,
          width: 100,
          border: "2px solid black",
          borderRadius: 10,
          backgroundColor: "transparent",
          fontFamily: "revert-layer",
        }}
        onClick={changeCharacter}
      >
        CHANGE
      </button>{" "}
      <br />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
