// index.js
import React from "react";
import ReactDOM from "react-dom";

const title = "SUBSCRIBE";
const tagline = "Sign up with your email address to recieve news and updates.";
const placeholder1 = "First Name";
const placeholder2 = "Last Name";
const placeholder3 = "Email";
const button_text = "Subscribe";

const app = (
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
    <div
      className="input_tags"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <input
        type="text"
        placeholder={placeholder1}
        style={{
          padding: 10,
          margin: 10,
          border: "1px lightgrey solid",
          borderRadius: 10,
        }}
      />
      <input
        type="text"
        placeholder={placeholder2}
        style={{
          padding: 10,
          margin: 10,
          border: "1px lightgrey solid",
          borderRadius: 10,
        }}
      />
      <input
        type="email"
        placeholder={placeholder3}
        style={{
          padding: 10,
          margin: 10,
          border: "1px lightgrey solid",
          borderRadius: 10,
        }}
      />
    </div>
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
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
