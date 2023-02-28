import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   return (
//     <div className="app-wrapper">
//       <div className="container">
//         <div>
//           <h1>Numbers List</h1>
//           {[1, 2, 3, 4, 5]}
//         </div>
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// to avoid it being printed in one line and we can make a component, and make each item be printed as a jsx element.
// we do

// const Numbers = ({ numbers }) => {
//   const list = numbers.map((number) => {
//     return <li>{number}</li>;
//   });
//   return list;
// };

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5, 6];
//   return (
//     <div className="app-wrapper">
//       <div className="container">
//         <div>
//           <h1>Numbers List Using map</h1>
//           <ul>
//             <Numbers numbers={numbers} />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

// map array of arrays

// In the app component, we call the Skills component, and we pass the props skills to the Skills component.
//The skills is an array of 4 arrays. It includes the technology with the level as the 2nd element. In order to print properly, we map
// as show above. In the skills component, we are mapping each sub-array to a skill component, which is an li item.
//It prints the technology and the technology level, side by side. The entire thing is wrapped in <ul> and hence,
//we have a list printed in order.

// const skills = [
//   ["HTML", 10],
//   ["CSS", 7],
//   ["JavaScript", 9],
//   ["React", 8],
// ];

// // Skill Component
// const Skill = ({ skill: [tech, level] }) => (
//   <li>
//     {tech} {level}
//   </li>
// );

// // Skills Component
// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill} />);
//   console.log(skillsList);
//   return <ul>{skillsList}</ul>;
// };

// const App = () => {
//   return (
//     <div className="container">
//       <div>
//         <h1>Skills Level</h1>
//         <Skills skills={skills} />
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// mapping an array of objects

// we have an array countries, which has objects within it. so the way we go about this is similar to the previous method. in the app
// component, we call the countries component and pass in the the props of the array of objects. In the countries component, we map the array
// and for each object, we call the country component and pass the individual object as a prop. In the country component, we simply
// return a div containing the name and city. The props have been destructured in the paretheses of the component.

// const countries = [
//   { name: "Finland", city: "Helsinki" },
//   { name: "Sweden", city: "Stockholm" },
//   { name: "Denmark", city: "Copenhagen" },
//   { name: "Norway", city: "Oslo" },
//   { name: "Iceland", city: "Reykjavík" },
// ];

// // Country component
// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   );
// };

// // countries component
// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => <Country country={country} />);
//   return <div>{countryList}</div>;
// };
// // App component
// const App = () => (
//   <div className="container">
//     <div>
//       <h1>Countries List</h1>
//       <Countries countries={countries} />
//     </div>
//   </div>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//One thing missing in these examples is that the mapping should include a key that sets each item as a unique element.
// so for the first numbers mapping, we can do the following:
// same as before, but we just add a key in the item being returned

// const Numbers = ({ numbers }) => {
//   // modifying array to array of li JSX
//   const list = numbers.map((num) => <li key={num}>{num}</li>)
//   return list
// }

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5]

//   return (
//     <div className='container'>
//       <div>
//         <h1>Numbers List</h1>
//         <ul>
//           <Numbers numbers={numbers} />
//         </ul>
//       </div>
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// in the example below, we can key the country names since they are unique and don't repeat

// const countries = [
//   { name: "Finland", city: "Helsinki" },
//   { name: "Sweden", city: "Stockholm" },
//   { name: "Denmark", city: "Copenhagen" },
//   { name: "Norway", city: "Oslo" },
//   { name: "Iceland", city: "Reykjavík" },
// ];

// // Country component
// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   );
// };

// // countries component
// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => (
//     <Country key={country.name} country={country} />
//   ));
//   return <div>{countryList}</div>;
// };
// const App = () => (
//   <div className="container">
//     <div>
//       <h1>Countries List</h1>
//       <Countries countries={countries} />
//     </div>
//   </div>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
