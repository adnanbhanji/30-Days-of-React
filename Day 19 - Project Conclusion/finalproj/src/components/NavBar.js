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
  return <h1>Dummy Data</h1>;
};
const NotFound = () => <h1>The page your looking for not found</h1>;

const NavBar = () => {
  return (
    <Router>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //flexDirection: "column"
            padding: 10,
            margin: 10,
          }}
        >
          <li style={{ padding: 10, margin: 10 }}>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Home
            </NavLink>
          </li>
          <li style={{ padding: 10, margin: 10 }}>
            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              About
            </NavLink>
          </li>
          <li style={{ padding: 10, margin: 10 }}>
            <NavLink
              to="/dummydata"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Dummy Data
            </NavLink>
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
