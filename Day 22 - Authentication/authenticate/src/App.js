import "./App.css";
import SignUp from "./components/auth/Signup";
import SignIn from "./components/auth/SignIn";
import AuthDetails from "./components/AuthDetails";

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;
