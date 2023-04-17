import React from "react"; // import React module
import { connect } from "react-redux"; // import connect function from react-redux

function Counter(props) {
  // create a functional component called Counter that takes props as its argument
  const { count, dispatch } = props; // extract count and dispatch from props

  function handleIncrement() {
    // define handleIncrement function
    dispatch({ type: "INCREMENT" }); // dispatch action to increment count
  }

  function handleDecrement() {
    // define handleDecrement function
    dispatch({ type: "DECREMENT" }); // dispatch action to decrement count
  }

  return (
    // return JSX to be rendered to the DOM
    <div>
      <p>Count: {count}</p>
      {/* display the count value */}
      <button onClick={handleIncrement}>Increment</button>
      {/* attach handleIncrement function to the onClick event of button */}
      <button onClick={handleDecrement}>Decrement</button>
      {/* attach handleDecrement function to the onClick event of button */}
    </div>
  );
}

function mapStateToProps(state) {
  // define mapStateToProps function
  return {
    // return an object with the count value from the state
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter); // connect the Counter component to the Redux store using the connect function
