import { useContext } from "react";
import UserContext from "./UserContext";

const login = async () => {
  return {
    id: 4,
    username: "bob",
    email: "bob@gmail.com",
  };
};

const Home = () => {
  //   const { value, setValue } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  // We can access UserContext no matter how deeply nested the component is.

  return (
    <div>
      <h3>Home</h3>
      {/* <p>{value}</p>
      <button onClick={() => setValue("clicked at home!")}>Change val</button> */}
      {/* When we click here, the value will obviously change, but it will also change in the 
      about page. Because its the same context throughout.  */}
      <pre>{JSON.stringify(user, null)} </pre>
      {/* <button onClick={() => setUser("hey you're logged in")}>Login</button> */}
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
