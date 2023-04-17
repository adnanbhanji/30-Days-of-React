// Import the configureStore function from the @reduxjs/toolkit package
import { configureStore } from "@reduxjs/toolkit";

// Import the counterReducer from a separate file
import counterReducer from "./reducers/counterReducer";

// Use the configureStore function to create a Redux store
const store = configureStore({
  reducer: counterReducer, // Set the reducer function to be used to update the store's state
});

// Export the store object so it can be used in other parts of the application
export default store;
