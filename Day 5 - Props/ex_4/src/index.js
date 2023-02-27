// index.js
// use props now

import React from "react";
import ReactDOM from "react-dom";
import pic from "./images/pic.jpeg";
import DoneIcon from "@mui/icons-material/Done";
import ScheduleIcon from "@mui/icons-material/Schedule";

const User = () => {
  return (
    <div className="img">
      <img
        src={pic}
        alt="pic"
        style={{ height: "225px", borderRadius: 150, marginLeft: 5 }}
      ></img>
    </div>
  );
};

const Text = ({ skills, name, profession }) => {
  return (
    <>
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
    </>
  );
};

const TechStack = ({ skill_stack }) => {
  return (
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
  );
};

const DateFooter = ({ date }) => {
  return (
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
  );
};

const Main = () => {
  const skills = "SKILLS";
  const name = "Adnan Bhanji";
  const profession = "Computer Science and AI";
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
  return (
    <div className="text" style={{ display: "flex", flexDirection: "column" }}>
      <Text skills={skills} name={name} profession={profession} />
      <TechStack skill_stack={skill_stack} />
      <DateFooter date={date} />
    </div>
  );
};

const App = () => {
  return (
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
      <User />
      <Main />
    </div>
  );
};

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
