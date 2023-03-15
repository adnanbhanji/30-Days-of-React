// We have installed the axios package using npm i axios, and import it here.

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import moment from "moment";
function App() {
  const [data, setData] = useState([]);
  // Without useEffect, the data would take some time to be fetched from the API,
  // and the component would render without any data.

  // The purpose of useEffect (or componentDidMount) is to trigger the data fetching
  // process when the component mounts (i.e., when it first renders), and update the
  // component state with the received data. Once the data is fetched and the state is
  // updated, the component will re-render, and the updated data will be displayed.

  // So useEffect waits for the data to arrive and updates the state,
  // which triggers a re-render of the component. This way, the component
  // will render with the updated data once it's fetched, rather than showing raw data
  // or an empty page.

  useEffect(() => {
    const API_URL = "https://restcountries.eu/rest/v2/all";
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // the dependancy is an empty array, meaning on every first render.
  // we update the state (setData) once the data is fetched, and then render.

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const API_URL = 'https://restcountries.eu/rest/v2/all';
  //       const response = await axios.get(API_URL);
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchCountries();
  // }, []);

  // this above, is how we could have done the same code, using async await.

  const renderCountries = () => {
    return data.map((country) => {
      const languageOrLanguages =
        country.languages.length > 1 ? "Langauges" : "Language";
      const formatLanguages = country.languages
        .map(({ name }) => name)
        .join(", ");
      return (
        <div>
          <div>
            {" "}
            <img src={country.flag} alt={country.name} />{" "}
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>
              {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      );
    });
  };
  // above we have a map function going through each country
  // we have a ternary operater to change the label from language to languages
  // based on the number of languages they have. we then have another map which accesses
  // the languages array which also has objects, with name as the key. using destructuring
  // we access the names properties and we return the names, so getting an array. Then
  // using, .join, we convert it from array, to a comma seperated string.

  // Then we just display some properties like the country flag, name, capital etc...
  return (
    <div className="App">
      <h1>Fetching Data Using Axios</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className="countries-wrapper">{renderCountries()}</div>
        <div className="react-icons">
          <TiSocialLinkedinCircular />
          <TiSocialGithubCircular />
          <TiSocialTwitterCircular />
        </div>
        <div className="time">
          <h1>How to use moment</h1>
          <p>This challenge was started {moment("2023-02-15").fromNow()}</p>
          <p>The challenge will be over in {moment("2023-03-30").fromNow()}</p>
          <p>Today is {moment(new Date()).format("MMMM DD, YYYY HH:mm")}</p>
        </div>
      </div>
    </div>
  );
}

// here we call the renderCountries function

export default App;
