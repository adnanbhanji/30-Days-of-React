// import React, { useRef } from "react";

// // We are using the useRef hook that we imported to be able to
// //get the data that the user enters in an easier way compared to how we previously did so.

// function App() {
//   const firstName = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(firstName.current.value);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <br />
//         <label htmlFor="firstName">First Name: </label>
//         <br />
//         <br />
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           placeholder="First Name"
//           ref={firstName}
//         />{" "}
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// we can also do so with multiple inputs, as shown below

import React, { useRef } from "react";

function App() {
  const firstName = useRef();
  const lastName = useRef();
  const country = useRef();
  const title = useRef();

  const handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault();

    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(title.current.value);
    console.log(country.current.value);

    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      title: title.current.value,
      country: country.current.value,
    };

    // the is the place we connect backend api to send the data to the database
    console.log(data);
  };

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            ref={firstName}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            ref={lastName}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            ref={country}
          />
        </div>
        <div>
          <input type="text" name="title" placeholder="Title" ref={title} />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default App;
