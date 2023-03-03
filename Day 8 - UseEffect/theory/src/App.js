// allows us to perform side effects on functional components
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // On every render
  // as we can see, I rendered is being printed out every time we type or do anything that requires the comoponent to be rendered.
  // so everytime there's a change, I rendered is printed out on the console.

  useEffect(() => {
    //window.addEventListener("resize", updateWindowWidth);
    console.log("I rendered");
  });

  //Nonetheless sometimes, we only want to perform some action when it first renders only. that is shown below.
  // It has a dependancy array which is empty, which means, only run this on the first render.
  // if we render again, don't run that code
  // when we run the code below, we can see that The component mounted, only runs once, and if we keep typing,
  // the I rendered keeps being printed continously from the code above.

  // on first render only
  useEffect(() => {
    console.log("The component mounted");
  }, []);

  // on first render + whenever dependency changes
  useEffect(() => {
    console.log(`The name has changed: ${name}`);
  }, [name]);

  // after we render, for the code above, everytime the name changes the statement is rendered again.
  // to do so, we have to unmount the component, and the mount it again, meaning in layman terms we have to take out whatever there is,
  // and then put it again. While taking it out, we can put a cleanup function which executes before it renders again.

  // in the function below if we take out the clean up function and the dependancy, it will update the window width everytime we resize
  // yes it will, but it the event listeners will keep adding for each render and use lots of memory which is not ideal.

  // so we say before you re-render, run the cleanup function. We remove the event listeners we added, so that they don't stack up

  // if we look at the console.logs, we can see it goes crazy everytime we resize, because its doing so everytime. so to optimize this,
  // we can just add a dependancy array that runs it only once, because we only want one event listener.

  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowWidth);
  //   console.log("attach");
  //   return () => {
  //     window.removeEventListener("resize", updateWindowWidth);
  //     console.log("detach");
  //   };
  // });

  // so the optimized code is below
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    console.log("attach");
  }, []);

  // in db's and api's this is v useful, when fetching data and all.

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="app">
      <center>
        <h2>The useEffect Hook</h2>
        <h3>The window width is: {windowWidth}</h3>

        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Please enter your name"
        />
      </center>
    </div>
  );
}

export default App;
