import React from "react";

const CountryData = ({ respData }) => {
  return respData.map((country) => {
    return (
      <div key={country.name.official}>
        <h2>{country.name.official}</h2>
        <img src={country.flags.png} alt="" />
        <h2>Capital: {country.capital}</h2>
        <h2>Languages:</h2>
        {country.languages.map((lang) => {
          return <li>{lang}</li>;
        })}
        <br />
        <br />
      </div>
    );
  });
};

export default CountryData;
