// getting to know what props are

// Similar to a function taking in arguements with parameters and getting dynamic data, props do the same with components.

// function syntax

// const getUserInfo = (firstName, lastName, country) => {
//   console.log(`${firstName} ${lastName}. Lives in ${country}.`);
// };

// // calling a functons
// getUserInfo("Adnan", "Bhanji", "Spain");

// //component syntax

// // User component, component should start with an uppercase
// const User = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.firstName}
//         {props.lastName}
//       </h1>
//       <small>{props.country}</small>
//     </div>
//   );
// };
// // calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
// <User firstName="Adnan" lastName="Bhanji" country="Spain" />;

// import React from "react";
// import ReactDOM from "react-dom";

// const welcome = "Welcome to 30 Days Of React";
// const title = "Getting Started React";
// const subtitle = "JavaScript Library";
// const author = {
//   firstName: "Adnan",
//   lastName: "Bhanji",
// };
// const date = "Oct 4, 2020";

// // Header Component
// const Header = (props) => {
//   console.log(props); // empty object, {} saw it on console
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {author.firstName} {author.lastName}
//         </p>
//         <small>{date}</small>
//       </div>
//     </header>
//   );
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// lets pass the welcome string as a prop

// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.welcome}</h1>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Header welcome="Welcome to the 30 day challenge, Adu B!" />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// now we pass all the details through props

// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstName} {props.lastName}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Header
//         welcome="Welcome to 30 Days Of React"
//         title="Getting Started React"
//         subtitle="JavaScript Library"
//         firstName="Adnan"
//         lastName="Bhanji"
//         date="Feb 26, 2023"
//       />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstName} {props.lastName}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   const welcome = "Welcome to 30 Days Of React";
//   const title = "Getting Started React";
//   const subtitle = "JavaScript Library";
//   const firstName = "Adnan";
//   const lastName = "Bhanji";
//   const date = "Oct 4, 2020";
//   return (
//     <div>
//       <Header
//         welcome={welcome}
//         title={title}
//         subtitle={subtitle}
//         firstName={firstName}
//         lastName={lastName}
//         date={date}
//       />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// now we move on to the numbers prop type

// const Age = (props) => {
//   return <div>This person is {props.age} years old. </div>;
// };

// const Weight = (props) => {
//   return <p>The weight of the object on earth is {props.weight} N.</p>;
// };

// const App = () => {
//   let currentYear = 2023;
//   let birthYear = 2003;
//   const age = currentYear - birthYear;
//   const gravity = 9.81;
//   const mass = 75;

//   return (
//     <div className="app">
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// boolean prop type

// const Status = (props) => {
//   // ternary operator to see if user is old enough to drive or not. 18 min age

//   let status = props.status ? "Old enough to drive" : "Too young to drive";
//   return <p>{status}</p>;
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   let currentYear = 2023;
//   let birthYear = 2003;
//   const age = currentYear - birthYear; // 5 years

//   let status = age >= 18;

//   return (
//     <div className="app">
//       <Status status={status} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// array prop type

// const Skills = (props) => {
//   return (
//     <ul>
//       {props.skills.map((skill) => {
//         return <li key={skill}>{skill}</li>;
//       })}
//     </ul>
//   );
// };

// const App = () => (
//   <div className="app">
//     <Skills skills={["HTML", "CSS", "JavaScript"]} />
//   </div>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// object props type

// // Header Component
// const Header = (props) => {
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//       </div>
//     </header>
//   );
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//   };

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement);

// changing all header properties to an obj

// // Header Component
// const showDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[time.getMonth()];
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return ` ${month} ${date}, ${year}`;
// };

// const Header = (props) => {
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//         <p>
//           {props.data.author.firstName} {props.data.author.lastName}
//         </p>
//         <small>{showDate(props.data.date)}</small>
//       </div>
//     </header>
//   );
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "Adnan",
//       lastName: "Bhanji",
//     },
//     date: new Date(), // date needs to be formatted to a human readable format
//   };

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// passing functions to props

// // A button component
// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const sayHi = () => {
//     alert("Hi");
//   };

//   return (
//     <div className="app">
//       <Button text="Say Hi" onClick={sayHi} />
//       {/* we can also write the code above for onclick as a function itself inside {}. eg onClick={()=>{alert('hi)}} */}
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement);

// more functions in props
// A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const greetPeople = () => {
//     alert("Welcome to 30 Days Of React Challenge, 2020");
//   };

//   return (
//     <div className="app">
//       <Button text="Greet People" onClick={greetPeople} />
//       {/* here we pass greetPeople function which alerts the greeting */}
//       <Button text="Show Time" onClick={() => alert(new Date())} />
//       {/* here we alert the date to show date */}
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// ways to destructure props
// step by step

// const showDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return ` ${month} ${date}, ${year}`;
// };
// // Header Component
// const Header = (props) => {
//   const data = props.data;
//   const { welcome, title, subtitle, author, date } = data;
//   const { firstName, lastName } = author;
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   );
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "Adnan",
//       lastName: "Bhanji",
//     },
//     date: new Date(),
//   };

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement);

// way 2 - one line

// const showDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return ` ${month} ${date}, ${year}`;
// };
// // Header Component
// const Header = (props) => {
//   const data = props.data;
//   const {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   } = data;

//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   );
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "Adnan",
//       lastName: "Bhanji",
//     },
//     date: new Date(),
//   };

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// inside the parenthesis

// const showDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return ` ${month} ${date}, ${year}`;
// };
// // Header Component
// const Header = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// }) => {
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   );
// };

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "Adnan",
//       lastName: "Bhanji",
//     },
//     date: new Date(),
//   };

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
