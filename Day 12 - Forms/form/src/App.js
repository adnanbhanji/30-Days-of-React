// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      error:
        "Username should be 3-16 characters and shouldn't include special characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      error: "It should be a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      error:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number, and 1 special character.",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      label: "confirmPassword",
      error: "Passwords don't match",
      required: true,
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
