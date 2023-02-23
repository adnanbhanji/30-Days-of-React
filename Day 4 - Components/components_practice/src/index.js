import React from "react";
import ReactDOM from "react-dom";
import pic from "./images/pic.jpeg";

// // example of functional component returning jsx
// const jsx = <tag>Content</tag>;
// const Component1 = () => {
//   return jsx;
// };

// // example of functional component returning jsx 2
// const Component2 = () => {
//   return <tag>Content</tag>;
// };

// lets re-wrte the header code from jsx to functional component
// this is the jsx element header.
// const headerjsx = (
//   <header>
//     <div className="header-wrapper">
//       <h1>30 day react challenge (Day 2)</h1>
//       <h2>Getting started React </h2>
//       <h3>Javascript Library </h3>
//       <p> Adnan Bhanji </p>
//       <small> February 21, 2003 </small>
//     </div>
//   </header>
// );

// can make a react component and render it in

// const ReactHeaderComponent = () => {
//   return headerjsx;
// };

// or can include the entire jsx element inside the component

const HeaderComponent = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>30 day react challenge (Day 4)</h1>
        <h2>Getting started React </h2>
        <h3>Javascript Library </h3>
        <p> Adnan Bhanji </p>
        <small> February 21, 2003 </small>
      </div>
    </header>
  );
};

const UserCard = () => {
  return (
    <div>
      <img src={pic} alt="pic" style={{ height: 200 }} /> <br />
      <h2>Adnan Bhanji</h2>
    </div>
  );
};

const TechList = () => {
  const web_dev = ["HTML", "CSS", "Javascript"];
  const web_dev_mapped = web_dev.map((tech) => <li key={tech}>{tech} 👍</li>);
  return web_dev_mapped;
};

const MainComponent = () => {
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisites to get started with ReactJS</p>
        <ul>
          <TechList />
          <br />
        </ul>
        <UserCard />
        <br />
      </div>
    </main>
  );
};

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright 2023</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
