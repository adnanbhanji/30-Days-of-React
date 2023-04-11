import { useEffect, useState } from "react";
import axios from "axios";

const useRandomJoke = (name) => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      let url = `https://api.chucknorris.io/jokes/random?name=${name}`;
      const response = await axios.get(url);
      setJoke(response.data.value);
      // console.log(response.data.value);
    };
    fetchJoke();
  }, [name]);
  return joke;
};

export default useRandomJoke;

// Here are the key points that make useRandomJoke a custom hook:

// It is a reusable piece of logic that encapsulates state and side effects related to fetching a random joke from an external API.
// It uses built-in hooks such as useState and useEffect to manage state and side effects respectively.
// It accepts one or more input parameters (in this case, the name prop).
// It returns one or more values that can be used by the component that calls the hook (in this case, the joke value).
// It has a name that starts with "use" (which is a convention for naming custom hooks in React).
