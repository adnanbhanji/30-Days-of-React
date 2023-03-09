import "./App.css";
import React, { useState } from "react";

// {/* React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.
//  */}

//  {/* Some examples are shown below */}

// Event handling in html

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <title>30 Days Of React App</title>
//   </head>
//   <body>
//     <button>onclick="greetPeople()">Greet People</button>
//     <script>
//       const greetPeople = () => {
//         alert('Welcome to 30 Days Of React Challenge')
//       }
//     </script>
//   </body>
// </html>

// Event handling in react

// import React from 'react'
// // if it is functional components
// const App = () => {
//   const greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge')
//   }
//   return <button onClick={greetPeople}> </button>
// }

// Additionally, we cannot return false to prevent normal behaviour in react, like we would in html. We have to call
// preventDefault explicitly, meaning we have to make the function.

// Lets practice using some of the events below

function App() {
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  //const [key, setKey] = useState("");
  const handleClick = (e) => {
    // e gives the value of an event
    console.log(e);
    setMessage("Welcome to the world of events");
  };

  // triggered whenever the mouse moves
  const handleMouseMove = (e) => {
    setMessage("Mouse is moving");
  };

  // to get value when an input field changes a value
  const handleChange = (e) => {
    setFirstName(e.target.value);
    setMessage(e.target.value);
  };

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  const handleKeyPress = (e) => {
    setMessage(
      `${e.target.value} has been pressed and the keycode is` + e.charCode
    );
  };
  // Blurring happens when a mouse leave an input field
  const handleBlur = (e) => {
    setMessage("Input field has been blurred");
  };

  // This event triggers during a text copy
  const handleCopy = (e) => {
    setMessage("Using 30 Days Of React for commercial purpose is not allowed");
  };

  return (
    <div className="App">
      <h1>Welcome to the World of Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <p onCopy={handleCopy}>
        Check copy right permission by copying this text
      </p>

      <p>{message}</p>
      <label htmlFor=""> Test for onKeyPress Event: </label>
      <input type="text" onKeyPress={handleKeyPress} />
      <br />

      <label htmlFor=""> Test for onBlur Event: </label>
      <input type="text" onBlur={handleBlur} />

      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input onChange={handleChange} name="firstName" value={firstName} />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
