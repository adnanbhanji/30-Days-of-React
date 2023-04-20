import React from "react";

const CountryData = ({ respData }) => {
  return (
    <div className="countries-container flex flex-wrap justify-center mt-4">
      {" "}
      {respData.map((country) => {
        return (
          <div
            key={country.name.official}
            className="mt-4 mb-4 w-96 h-96 flex flex-col justify-center items-center"
          >
            {" "}
            {/* add a class to each country's container div */}
            <h2>{country.name.official}</h2>
            <div className="w-72 h-54 ">
              <img
                src={country.flags.png}
                alt=""
                className="w-full h-48 object-cover"
              />
            </div>
            <h2>Capital: {country.capital}</h2>
            <h2>Population: {country.population}</h2>
            <h2>Currency:</h2>
            {country.currencies && // we cannot use map here because its not an array
              // but its an object. so what we do instead is check if the value exists,
              // and then use map but on the values, which is an array of values.
              // so now our map is functional.
              Object.values(country.currencies)
                .slice(0, 1)
                .map((curr) => {
                  return (
                    <div key={Math.random()}>
                      <li>
                        <span>{curr.symbol}</span> - {curr.name}
                      </li>
                    </div>
                  );
                })}
            <h2>Languages:</h2>
            {country.languages && // we cannot use map here because its not an array
              // but its an object. so what we do instead is check if the value exists,
              // and then use map but on the values, which is an array of values.
              // so now our map is functional.
              Object.values(country.languages)
                .slice(0, 2)
                .map((lang) => {
                  return <li key={Math.random()}>{lang}</li>;
                })}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CountryData;
