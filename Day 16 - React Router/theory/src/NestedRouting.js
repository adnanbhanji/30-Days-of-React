// Nested routing in React allows you to define child routes within a parent route.
// This is useful when you have a complex application with multiple pages that have their own sub-pages or components.

// To implement nested routing in React, you need to define a parent component that will contain all the child components that will
// be displayed in the child routes. You also need to define the parent route that will match the URL of the parent component.

// Inside the parent component, you can define additional child routes that will match the URL of the child components.
// These child routes can be defined using the same Route component that you use to define the parent route.

// When a user navigates to a child route, the corresponding child component will be rendered inside the parent component.
// This allows you to create a hierarchy of components that can be navigated to using nested URLs.

// Here is an example of how you can implement nested routing in React using React Router:

// eg

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Blog from "./components/Blog";
// import Post from "./components/Post";

const Home = () => <h1>Welcome to Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const Blog = () => <h1>Blog</h1>;
const Post = () => <h1>Post 1</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
          <Route path="/blog" element={Blog}>
            <Route path="/blog/:postId" element={Post} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
