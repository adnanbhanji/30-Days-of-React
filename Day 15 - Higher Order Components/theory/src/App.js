// import logo from "./logo.svg";
import "./App.css";

// The term higher order component is similar to higher order function in JavaScript.
// In JavaScript, a higher order function is a function that takes another function as a
// parameter or return another function.

// Similar to higher order function, a higher order component takes a component and
// return another component. This definition will make sense with examples.
// Look at the example below for better understand.

// One way of writing a Higher Order Component(HOC)
// import React from 'react'
// const higherOrderComponent = (Component) => {
//   return (props) => {
//     return <Component {...props} />
//   }
// }

// import React from "react";

// const Button = ({ onClick, text, style }) => {
//   return (
//     <button onClick={onClick} style={style}>
//       {text}
//     </button>
//   );
// };

// const buttonWithStyle = (CompParam) => {
//   const buttonStyles = {
//     backgroundColor: "#61dbfb",
//     padding: "10px 25px",
//     border: "none",
//     borderRadius: 5,
//     margin: 3,
//     cursor: "pointer",
//     fontSize: 18,
//     color: "white",
//   };
//   return (props) => {
//     return <CompParam {...props} style={buttonStyles} />;
//   };
// };
// const NewButton = buttonWithStyle(Button);

// const App = () => {
//   return (
//     <div className="App">
//       {" "}
//       <br />
//       <Button text="No Style" /> <br />
//       <NewButton text="Styled Button" />
//     </div>
//   );
// };

// export default App;

// so basically what happens is here is the user of higher order components.
// We start of by creating a Button component, that simply takes 3 prop values
// then returns a button.

// then we have buttonWithStyles which takes in a component, as an arguement, and
// defines an object for button styles. returns a new function that wraps the
// original component in a new component with added style props.
// The buttonStyles object contains the style properties to be applied to the
// wrapped component.

// then we make a new button which calls buttonWithStyle on a Button component.
// making it a styled button.

//finally in the app, we render 2 buttons. One just the Button component,
// and the other a styled button, which is a
//Button component that was passed as a parameter in the
//buttonWithStyle function.

import React from "react";

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyles = (CompParam, name = "default") => {
  const colors = [
    {
      name: "default",
      backgroundColor: "#e7e7e7",
      color: "#000000",
    },
    {
      name: "react",
      backgroundColor: "#61dbfb",
      color: "#ffffff",
    },
    {
      name: "success",
      backgroundColor: "#4CAF50",
      color: "#ffffff",
    },
    {
      name: "info",
      backgroundColor: "#2196F3",
      color: "#ffffff",
    },
    {
      name: "warning",
      backgroundColor: "#ff9800",
      color: "#ffffff",
    },
    {
      name: "danger",
      backgroundColor: "#f44336",
      color: "#ffffff",
    },
  ];
  const { backgroundColor, color } = colors.find((c) => c.name === name);

  const buttonStyles = {
    backgroundColor,
    padding: "10px 45px",
    border: "none",
    borderRadius: 3,
    margin: 3,
    cursor: "pointer",
    fontSize: "1.25rem",
    color,
  };
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);
const ReactButton = buttonWithStyles(Button, "react");
const InfoButton = buttonWithStyles(Button, "info");
const SuccessButton = buttonWithStyles(Button, "success");
const WarningButton = buttonWithStyles(Button, "warning");
const DangerButton = buttonWithStyles(Button, "danger");

function App() {
  return (
    <div className="App">
      <Button text="No Style" onClick={() => alert("I am not styled yet")} />
      <NewButton
        text="Styled Button"
        onClick={() => alert("I am the default style")}
      />
      <ReactButton text="React" onClick={() => alert("I have react color")} />
      <InfoButton
        text="Info"
        onClick={() => alert("I am styled with info color")}
      />
      <SuccessButton text="Success" onClick={() => alert("I am successful")} />
      <WarningButton
        text="Warning"
        onClick={() => alert("I warn you many times")}
      />
      <DangerButton
        text="Danger"
        onClick={() => alert("Oh no, you can not restore it")}
      />
    </div>
  );
}

export default App;
