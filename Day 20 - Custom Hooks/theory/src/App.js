import "./App.css";
// import axios from "axios";
import { useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {
  const nameRef = useRef(null);
  const [name, setName] = useState("Adnan Bhanji");
  const randJoke = useRandomJoke(name);
  const generateJoke = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };
  return (
    <div className="App">
      <h1>Random Joke Generator </h1>
      {/* <button onClick={fetchJoke}> Generate Joke </button> */}
      <p>{randJoke}</p>
      <form action="">
        <input placeholder="Name" ref={nameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;

// In React, ref is used to get a reference to a DOM element.
// This reference can be accessed using the .current property of the ref object.
// In our code, we create a nameRef object using the useRef hook and assign it to the ref attribute
// of the input field. This creates a reference to the input field's underlying DOM node, which can be
// accessed using nameRef.current.

// Later in our code, we use the generateJoke function to update the name
// state based on the user's input. This function reads the value of the input
// field using nameRef.current.value. By doing so, we are able to get the value of
// the input field and use it to update the name state.

// So, to summarize, the ref part in our code is being used to get a reference to
// the input field and read its value when the "Generate Joke" button is clicked.
// This allows us to update the name state based on the user's input.
