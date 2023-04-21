import { useContext } from "react";
import UserContext from "./UserContext";

const About = () => {
  //const { value, setValue } = useContext(UserContext);
  const { user } = useContext(UserContext);
  return (
    <div>
      <h3>About</h3>
      {/* <p>{value}</p> */}
      {/* <button onClick={() => setValue("clicked on about!")}>Change val</button> */}
      <pre>{JSON.stringify(user, null)}</pre>
    </div>
  );
};

export default About;
