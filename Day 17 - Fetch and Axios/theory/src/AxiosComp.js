// We are doing the same thing here as fetch, but now we use axios and its more advanced and a better way
// to get data from API's. We can also do POST, PUT, and other types of API requests with Axios.

import React, { useState, useEffect } from "react";
import axios from "axios";

const cities = [
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

const AxiosComp = () => {
  const [respData, setRespData] = useState(null);
  const [cityVal, setCityVal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const city = cities[Math.floor(Math.random() * cities.length)];
      setCityVal(city);
      const url = `https://goweather.herokuapp.com/weather/${cityVal}`;
      try {
        const response = await axios.get(url);
        setRespData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!respData || !cityVal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <City response={respData} cityval={cityVal} />
    </div>
  );
};

export default AxiosComp;
