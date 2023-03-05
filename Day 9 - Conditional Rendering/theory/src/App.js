// conditional rendering theory
//In React, you can conditionally render JSX using JavaScript syntax like if statements
// &&, and ? : operators.

//Let’s say we have a PackingList component rendering several Items,
//which can be marked as packed or not:

// function Item({ name, isPacked }) {
//   return <li className="item">{name}</li>;
// }

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// we have props that indicate whether we have packed those items. to check
// we can use conditions as shown below:

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">{name} 👍 </li>;
//   } else {
//     return <li className="item">{name} </li>;
//   }
// }

//In some situations, we won’t want to render anything at all.
//For example, say we don’t want to show packed items at all.
//A component must return something. In this case, we can return null:

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// }

// Nonetheless, the more common way, and "better" way is to do it using ternary operators
// or logival operator. Here is an example of how we would do so using logical operators

// instead of this code

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// }

// we can simply write

// function Item({ name, isPacked }) {
//   return <li className="item">{isPacked ? name + "👍" : name}</li>;
// }

// we can read the code above as
// if isPacked is true, then (?) render name + ' ✔', otherwise (:) render name”.

// if we want to add strike lines we could also do so as the following
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">{isPacked ? <del> {name + "👍"} </del> : name}</li>
//   );
// }

// another common shortcut is using the && operator to
// render some JSX when the condition is true, or render nothing otherwise.

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && "✔"}
//     </li>
//   );
// }

//Can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.

// we can also assign jsx to variables and render those as shown below

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

function App() {
  return (
    <div className="App">
      <PackingList />
    </div>
  );
}

export default App;
