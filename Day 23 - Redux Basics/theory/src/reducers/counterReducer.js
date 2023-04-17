// Define an initial state object for the counter
const initialState = {
  count: 0,
};

// Define a reducer function that updates the counter state based on dispatched actions
function counterReducer(state = initialState, action) {
  switch (action.type) {
    // If the action type is INCREMENT, increment the count by 1
    case "INCREMENT":
      return { count: state.count + 1 };
    // If the action type is DECREMENT, decrement the count by 1
    case "DECREMENT":
      return { count: state.count - 1 };
    // If the action type is unknown or the reducer is called for the first time, return the current state
    default:
      return state;
  }
}

// Export the counterReducer function so it can be used in other parts of the application
export default counterReducer;
