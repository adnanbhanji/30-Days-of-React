import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState(
    "Click show time or Greet people to change me"
  );

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };

  const handleTime = () => {
    let message = showDate(new Date());
    setMessage(message);
  };

  const greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2020";
    setMessage(message);
  };

  const data = {
    welcome: "30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Adnan",
      lastName: "Bhanji",
    },
    date: "March 6, 2023",
  };

  const techs = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="app">
      <Header data={data} />
      <Main
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        loggedIn={loggedIn}
        handleLogin={handleLogin}
        message={message}
      />
      <Footer date={new Date()} />
    </div>
  );
};

export default App;
