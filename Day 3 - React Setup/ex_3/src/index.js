// index.js
import React from "react";
import ReactDOM from "react-dom";
import pic from "./images/pic.jpeg";
import DoneIcon from "@mui/icons-material/Done";
import ScheduleIcon from "@mui/icons-material/Schedule";

const user = (
  <img
    src={pic}
    alt="pic"
    style={{ height: "225px", borderRadius: 150, marginLeft: 5 }}
  ></img>
);
const name = "Adnan Bhanji";
const profession = "Computer Science and AI";
const skills = "SKILLS";
const skill_stack = [
  "HTML",
  "CSS",
  "Javascript",
  "Python",
  "Node",
  "Express",
  "Docker",
  "SQL",
  "MongoDB",
  "Pandas",
  "Data Analysis",
  "Machine Learning",
  "Git",
];

const date = "Joined on January 20, 2019";

const app = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "99%",
      height: "100%",
      background: "white",
      borderRadius: 10,
      padding: "20px 20px",
      fontFamily: "Montserrat",
    }}
  >
    <div className="img">{user}</div>
    <div className="text" style={{ display: "flex", flexDirection: "column" }}>
      <p
        style={{
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          marginLeft: 12,
          letterSpacing: 2,
          fontWeight: 1000,
        }}
      >
        {name}{" "}
        <DoneIcon
          style={{
            background: "#40E0D0",
            color: "white",
            marginLeft: 10,
            borderRadius: 10,
          }}
        />
      </p>
      <p style={{ color: "#73787C", marginLeft: 10 }}>{profession}</p>
      <p style={{ marginLeft: 10, fontWeight: 1000 }}>{skills}</p>
      <div style={{ display: "flex", marginLeft: 10 }}>
        {skill_stack.map((skill) => (
          <span
            key={skill}
            style={{
              padding: 5,
              margin: 10,
              border: "2px solid #40E0D0",
              borderRadius: 10,
              background: "#40E0D0",
              color: "white",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      <p
        style={{
          marginLeft: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ScheduleIcon style={{ paddingRight: 10 }} />
        {date}
      </p>
    </div>
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
