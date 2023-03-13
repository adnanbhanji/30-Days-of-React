import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  });

  const handleChange = (e) => {
    console.log("hi");
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
  };

  const { firstName, lastName, title, country } = state;

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Form;
