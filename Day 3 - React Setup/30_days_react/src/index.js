import React from "react";
import ReactDOM from "react-dom";
import pic from "./images/pic.jpeg";

const welcome = "30 day react challenge (Day 3)";
const title = "Getting started React";
const subtitle = "Javascript Library ";
const fname = "Adnan";
const lname = "Bhanji ";
const date = "February 21, 2003";

const header = (
  // <header style={headerStyle}>
  // <header>
  //   <div className="header-wrapper">
  //     <h1>30 day react challenge (Day 2)</h1>
  //     <h2>Getting started React </h2>
  //     <h3>Javascript Library </h3>
  //     <p> Adnan Bhanji </p>
  //     <small> February 21, 2003 </small>
  //   </div>
  // </header>

  // the above is hard coded data, can also get dynamic data
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {" "}
        {fname} {lname}{" "}
      </p>
      <small> Date: {date} </small>
    </div>
  </header>
);

//   const mainStyle = {
//     backgroundColor: "#F3F0F5",
//     padding: "20px",
//   };

const web_dev = ["HTML", "CSS", "Javascript"];
const web_dev_mapped = web_dev.map((tech) => <li key={tech}>{tech} 👍</li>);

const user = (
  <div>
    <img style={{ height: "250px" }} src={pic} alt="pic of me" />
  </div>
);

const main = (
  // <main style={mainStyle}>
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>{web_dev_mapped}</ul>
      <br />
      <br />
      {user}
    </div>
  </main>
);
//   const footerStyle = {
//     backgroundColor: "#61DBFB",
//     padding: "15px",
//   };

const footer = (
  // <footer style={footerStyle}>
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2023 </p>
    </div>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
