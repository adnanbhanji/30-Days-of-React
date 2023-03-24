//The Route component allows to navigate between components. It is a pathway from one component to another.
// every route has to be within routes
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => <h1>Welcome to Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const Challenge = () => {
  return <h1>React Challenge 30 days</h1>;
};

function RoutesComp() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesComp;

// instead of path, we can make exact path to make it strictly the path that is in the quotes
// we can also use strict to keep or get rid of the trailing slash in a path eg - "/about/"
