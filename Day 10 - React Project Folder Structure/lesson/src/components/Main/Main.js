import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Message from "../Login/Message";
import TechList from "../TechList/TechList";
import Button from "../Button/Button";

const Main = ({
  techs,
  greetPeople,
  handleTime,
  loggedIn,
  handleLogin,
  message,
}) => {
  console.log(message);
  const status = loggedIn ? <Welcome /> : <Login />;
  // can also put the styles in css seperately
  // CSS styles in JavaScript Object

  const buttonStyles = {
    backgroundColor: "#61dbfb",
    padding: 10,
    border: "none",
    borderRadius: 5,
    margin: 3,
    cursor: "pointer",
    fontSize: 22,
    color: "white",
  };
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        {techs.length === 3 && (
          <p>You have all the prerequisite courses to get started React</p>
        )}
        <div>
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />{" "}
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          {!loggedIn && (
            <p>
              Please login to access more information about 30 Days Of React
              challenge
            </p>
          )}
        </div>
        <div style={{ margin: 30 }}>
          <Button
            text={loggedIn ? "Logout" : "Login"}
            style={buttonStyles}
            onClick={handleLogin}
          />
          <br />
          {status}
        </div>
        <Message message={message} />
      </div>
    </main>
  );
};

export default Main;
