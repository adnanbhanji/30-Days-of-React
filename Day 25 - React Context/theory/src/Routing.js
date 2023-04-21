import React, { useMemo, useState } from "react";
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserContext from "./UserContext";

const RoutingComp = () => {
  //   const [value, setValue] = useState("Hello from context");
  const [user, setUser] = useState(null);
  //   const providerValue = useMemo(() => {
  //     return { value, setValue };
  //   }, [value, setValue]);
  const providerUserValue = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  // What we do here is that we put value and setValue into a useMemo
  // useMemo is a React hook that can be used to
  // optimize the performance of your application by memoizing a value or a function. Memoization
  // means caching the result of a function call and using the cached result when the same input is
  // given again. By memoizing values or functions that are expensive to compute, you can avoid unnecessary
  // re-computations and improve the overall speed of your application. The useMemo hook takes a function
  // that returns the memoized value, and an array of dependencies that triggers a re-computation when
  // any of them change.

  // so essentially, the output and all of the function is stored in cache and this helps
  // becuase we don't have to keep rendering continously everytime the same thing, we can use the cache.
  // now only if the input changes, then we want to get the new data, so the function will kind of be
  // triggered again, and we will get the new data being returned.
  return (
    <Router>
      <div className="">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <UserContext.Provider value={providerUserValue}>
          {" "}
          {/* providerValue */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            {/* This allows us to make sure that all incorrect urls are given a msg */}
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default RoutingComp;
