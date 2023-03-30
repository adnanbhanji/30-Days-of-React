import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";

const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const DummyData = () => {
  return <h1>React Challenge 30 days</h1>;
};
const NotFound = () => <h1>The page your looking for not found</h1>;

const NavBar = () => {
  return (
    <Router>
      <div className="">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/dummydata">Dummy Data</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dummydata" element={<DummyData />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* This allows us to make sure that all incorrect urls are given a msg */}
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
