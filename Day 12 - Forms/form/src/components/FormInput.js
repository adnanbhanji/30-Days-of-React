import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, error, onChange, id, ...others } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...others}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => others.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{error}</span>
    </div>
  );
};

export default FormInput;
