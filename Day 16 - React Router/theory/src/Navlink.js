// NavLink is a component provided by the react-router-dom package that is used to create navigation links in a React application.
// It is similar to the traditional a HTML element, but with some added benefits when it comes to navigation in a
// single-page application.

// Difference between NavLink and Route

// NavLink and Route are two different components provided by the react-router-dom package that serve different purposes.

// Route is used to define a route for a specific URL path and specify which component should be rendered when the URL matches that path.
// It is used to define the relationship between a URL and a specific component in your application.

// On the other hand, NavLink is used to create clickable links that lead to the defined routes in your application.
// It is used to define the links that the user can click to navigate to different pages/components in your application.

// So, Route defines which component to render when a specific URL path is matched,
// and NavLink creates links that allow the user to navigate to those specific URL paths.
// They work together to create a navigational structure for your single-page application.

// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   NavLink,
// } from "react-router-dom";

// // Home component
// const Home = (props) => <h1>Welcome Home</h1>;
// // About component
// const About = (props) => <h1>About Us</h1>;
// // Contact component
// const Contact = (props) => <h1>Contact us</h1>;
// // Challenge component
// const Challenges = (props) => (
//   <div>
//     <h1>30 Days Of React Challenge</h1>
//   </div>
// );

// const NavLinkComp = () => {
//   return (
//     <Router>
//       <div className="">
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//         </ul>

//         <Routes>
//           <Route path="/about" element={About} />
//           <Route path="/contact" element={Contact} />
//           <Route path="/challenges" element={Challenges} />
//           <Route path="/" element={Home} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default NavLinkComp;

import React from "react";
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Home = () => <h1>Welcome to Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const Challenge = () => {
  return <h1>React Challenge 30 days</h1>;
};
const NotFound = () => <h1>The page your looking for not found</h1>;

const NavLinkComp = () => {
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
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/challenge">Challenge</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* This allows us to make sure that all incorrect urls are given a msg */}
        </Routes>
      </div>
    </Router>
  );
};

export default NavLinkComp;

// we can also make a component, which is reposnible for the navigation
// something like this

// const Navbar = () => (
//   <ul>
//     <li>
//       <NavLink to='/'>Home</NavLink>
//     </li>
//     <li>
//       <NavLink to='/about'>About</NavLink>
//     </li>
//     <li>
//       <NavLink to='/contact'>Contact</NavLink>
//     </li>
//     <li>
//       <NavLink to='/challenges'>Challenges</NavLink>
//     </li>
//   </ul>
// )

// then we just call it in the main component below
