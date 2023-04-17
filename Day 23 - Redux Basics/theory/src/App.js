import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h2>Day 23: Counter Using Redux</h2>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
