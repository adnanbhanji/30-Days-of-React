// import logo from "./logo.svg";
import "./App.css";
//import RoutesComp from "./Routes";
import NavLinkComp from "./Navlink";
// import // BrowserRouter as Router,
// // Route,
// // NavLink,
// // Switch, // switch is outdated now
// // Redirect,
// // Prompt,
// // withRouter,
// // Routes,
// "react-router-dom";

// we first installed the package and imported react router dom, which would help us
// in adding different routes to the application.
// we have used destructuring to import the different components from router dom,
//and help in creating different routes that we may have in the web app.
// const Home = () => <h1>Welcome to Home Page</h1>;
// const About = () => <h1>About Us</h1>;
// const Contact = () => <h1>Contact Us</h1>;
// const Challenge = () => {
//   return <h1>React Challenge 30 days</h1>;
// };

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/challenge" element={<Challenge />} />
    //     </Routes>
    //   </div>
    // </Router>
    <NavLinkComp />
  );
}

export default App;
