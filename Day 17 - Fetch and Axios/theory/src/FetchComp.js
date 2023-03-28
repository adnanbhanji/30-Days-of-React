// Currently, JavaScript provides a fetch API to make HTTP requests.
// Fetch might not be supported by all browsers therefore we have install
// addition package for browser supports. However, if we use Axios we do not
// need to use additional package for browser support. Axios code seems neater than
// fetch. In this section we will see the difference between fetch and axios
import React from "react";
import { useState, useEffect } from "react";

//here we just make a func that returns a random city

const cities = () => {
  const topCities = [
    "Paris",
    "London",
    "Rome",
    "Madrid",
    "Barcelona",
    "Berlin",
    "Athens",
    "Venice",
    "Vienna",
    "Dublin",
  ];
  let city = topCities[Math.floor(Math.random() * topCities.length)];
  return city;
};

// here we make a component, which takes in the props response and city value, and just displays info
const City = ({ response, cityval }) => {
  return (
    <div>
      <h1>{cityval}</h1>
      <h2>Temperature: {response.temperature} </h2>
      <h2>Wind Speed: {response.wind} </h2>
      <h2>Description: {response.description} </h2>
    </div>
  );
};

// here what happens is :
// we create states for the responseData and city value, and initially set to null
// then we use a useeffect hook, so that on every first render only, we get data from api
// we define an async/await function (this makes life easier compared to promises and all)
// we generate a city value, and set it using our state hook
//we define url with our city
// promise part is commented out, but can be used. will get an error because it takes time to get the data, but can easily be solved
// so we use await, as its better
// we get the response, and await till we get it
// we get the data from the response, and await till we get it
// finally, we set the response data hook, to the data we got
// we can console log and call the function
// we use a ternary operator so if any of data or city are not ready, we show loading

const FetchComp = () => {
  const [respData, setRespData] = useState(null);
  const [cityVal, setCityVal] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let city = cities();
      setCityVal(city);
      const url = `https://goweather.herokuapp.com/weather/${cityVal}`;
      //   let a = fetch(url);
      //   a.then((response) => {
      //     return response.json();
      //   }).then((response) => {
      //     setRespData(response);
      //     console.log(response);
      //   });
      const response = await fetch(url);
      const data = await response.json();
      setRespData(data);
      console.log(data);
    };
    fetchData();
  }, [cityVal]);
  if (!respData || !cityVal) {
    return <div>{cityVal}Loading...</div>;
  }
  return (
    <div>
      <City response={respData} cityval={cityVal} />
    </div>
  );
};

export default FetchComp;

// Note, this code is correct and works, but we get an error because the API stopped working
