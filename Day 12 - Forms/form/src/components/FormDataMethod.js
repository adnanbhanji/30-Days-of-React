// import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  // we could use useState hook to get the data, but it is re-rendered everytime,
  // which is not the most efficient. so we can use new FormData.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data);
    console.log(Object.fromEntries(data.entries())); // using object methods
  };

  // this allows us to reach the values without re-rendering the components

  // however usestate is also a perfectly good solution so we will stick with that
  //   in the main project
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="firstName" placeholder="First Name" />
        <FormInput name="lastName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
