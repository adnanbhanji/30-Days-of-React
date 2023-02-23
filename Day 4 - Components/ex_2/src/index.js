// index.js
// we have to edit yesterday's code to now use functional components and render them in an APp component instead of just rendering jsx

import React from "react";
import ReactDOM from "react-dom";

const title = "SUBSCRIBE";
const tagline = "Sign up with your email address to recieve news and updates.";
const placeholder1 = "First Name";
const placeholder2 = "Last Name";
const placeholder3 = "Email";
const button_text = "Subscribe";

const Text = () => {
  return (
    <div
      className="text"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
      }}
    >
      <h1 style={{ fontWeight: 235, letterSpacing: -2 }}>{title}</h1>
      <p>{tagline}</p>
    </div>
  );
};

const MiniInputTag = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      style={{
        padding: 10,
        margin: 10,
        border: "1px lightgrey solid",
        borderRadius: 10,
      }}
    />
  );
};

const InputTags = () => {
  return (
    <div
      className="input_tags"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <MiniInputTag placeholder={placeholder1} />
      <MiniInputTag placeholder={placeholder2} />
      <MiniInputTag placeholder={placeholder3} />
    </div>
  );
};

const ButtonRed = () => {
  return (
    <div className="btn" style={{ padding: 10 }}>
      <button
        style={{
          height: 40,
          width: 200,
          border: "1px lightgrey solid",
          borderRadius: 10,
          background: "#f5837d",
          color: "white",
        }}
      >
        {button_text}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "300px",
        background: "#ADD8E6",
        fontFamily: "Montserrat",
      }}
    >
      <Text />
      <InputTags />
      <ButtonRed />
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
