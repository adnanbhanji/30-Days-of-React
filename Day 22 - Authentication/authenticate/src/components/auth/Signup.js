import React, { useState } from "react";
import { auth } from "../../firebase"; //from the firebase.js file
import { createUserWithEmailAndPassword } from "firebase/auth"; // Function provided by react to signup

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password) // we create user with the details they give
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create an account</h1>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up Here</button>
      </form>
    </div>
  );
};

export default SignUp;
