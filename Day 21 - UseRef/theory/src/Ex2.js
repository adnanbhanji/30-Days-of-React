import { useRef } from "react";

function ExampleComponent2() {
  const countRef = useRef(0);

  function increment() {
    countRef.current += 1;
    console.log(countRef.current);
  }

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default ExampleComponent2;

// In this example, we create a ref using the useRef hook and initialize it to 0.
// We then create an increment function that increments the countRef.current value
//  by 1 and logs it to the console.

// Every time the user clicks the "Increment Count" button, the increment function is called,
// which updates the countRef.current value and logs the new value to the console.
