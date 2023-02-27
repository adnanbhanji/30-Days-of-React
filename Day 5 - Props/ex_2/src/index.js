// index.js
// editing this to use props
// way 1

// import React from "react";
// import ReactDOM from "react-dom";

// const Text = (props) => {
//   return (
//     <div
//       className="text"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         paddingBottom: 20,
//       }}
//     >
//       <h1 style={{ fontWeight: 235, letterSpacing: -2 }}>{props.title}</h1>
//       <p>{props.tagline}</p>
//     </div>
//   );
// };

// const MiniInputTag = (props) => {
//   return (
//     <input
//       type="text"
//       placeholder={props.placeholder}
//       style={{
//         padding: 10,
//         margin: 10,
//         border: "1px lightgrey solid",
//         borderRadius: 10,
//       }}
//     />
//   );
// };

// const InputTags = () => {
//   const placeholder1 = "First Name";
//   const placeholder2 = "Last Name";
//   const placeholder3 = "Email";
//   return (
//     <div
//       className="input_tags"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "flex-end",
//       }}
//     >
//       <MiniInputTag placeholder={placeholder1} />
//       <MiniInputTag placeholder={placeholder2} />
//       <MiniInputTag placeholder={placeholder3} />
//     </div>
//   );
// };

// const ButtonRed = (props) => {
//   return (
//     <div className="btn" style={{ padding: 10 }}>
//       <button
//         style={{
//           height: 40,
//           width: 200,
//           border: "1px lightgrey solid",
//           borderRadius: 10,
//           background: "#f5837d",
//           color: "white",
//         }}
//       >
//         {props.button_text}
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   const tagline =
//     "Sign up with your email address to recieve news and updates.";
//   const button_text = "Subscribe";
//   const title = "SUBSCRIBE";
//   return (
//     <div
//       className="container"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "80%",
//         height: "300px",
//         background: "#ADD8E6",
//         fontFamily: "Montserrat",
//       }}
//     >
//       <Text tagline={tagline} title={title} />
//       <InputTags />
//       <ButtonRed button_text={button_text} />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement);

// way 2

import React from "react";
import ReactDOM from "react-dom";

const Text = ({ title, tagline }) => {
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

const MiniInputTag = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
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
  const placeholder1 = "First Name";
  const placeholder2 = "Last Name";
  const placeholder3 = "Email";
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

const ButtonRed = ({ button_text }) => {
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
  const tagline =
    "Sign up with your email address to recieve news and updates.";
  const button_text = "Subscribe";
  const title = "SUBSCRIBE";
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
      <Text tagline={tagline} title={title} />
      <InputTags />
      <ButtonRed button_text={button_text} />
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
