import { useRef } from "react";

function ExampleComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default ExampleComponent;

// In this example, we create a ref using the useRef hook and initialize it to null.
// We then pass this ref to the input element using the ref prop.

// When the user clicks the "Focus Input" button, the handleClick function is called,
// which calls the focus method on the inputRef.current object. This causes the input
// to receive focus and the cursor to appear inside it.
