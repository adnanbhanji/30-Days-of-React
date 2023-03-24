// BrowerRouter is a parent component which allows to wrap the application route.
// Using the BrowserRouter we can access the browser history. Sometimes it can renames as router.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

function BrowerRouterComp() {
  return (
    <Router>
      <div className="App">
        <h1>React Router DOM</h1>
      </div>
    </Router>
  );
}

export default BrowerRouterComp;

//What we have done is basically wrapped our entire app within Browser Router or Router.
// We can now add routes within this: will be done in the Routes file.
