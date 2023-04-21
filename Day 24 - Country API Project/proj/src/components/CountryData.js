import React from "react";

const CountryData = ({ respData }) => {
  return (
    <div className="countries-container flex flex-wrap justify-center mt-4">
      {" "}
      {respData.map((country) => {
        return (
          <div
            key={country.name.common}
            className="mt-4 mb-4 w-96 h-96 flex flex-col justify-center items-center bg-slate-100 ml-2 mr-2 pt-8"
          >
            {" "}
            {/* add a class to each country's container div */}
            <div className="w-64 h-48 flex justify-center items-center ">
              <img
                src={country.flags.png}
                alt=""
                className="w-full h-32 object-cover"
              />
            </div>
            <div>
              <h2 className="text-yellow-500 text-2xl p-2 break-words">
                {country.name.official}
              </h2>
              <h2 className="p-1">Capital: {country.capital}</h2>
              <h2 className="p-1">Population: {country.population}</h2>
              <h2 className="p-1">
                Currency:{" "}
                {country.currencies && // we cannot use map here because its not an array
                  // but its an object. so what we do instead is check if the value exists,
                  // and then use map but on the values, which is an array of values.
                  // so now our map is functional.
                  Object.values(country.currencies)
                    .slice(0, 1)
                    .map((curr) => {
                      return (
                        <span key={Math.random()}>
                          {curr.symbol} - {curr.name}
                        </span>
                      );
                    })}
              </h2>
              <h2 className="p-1">
                Languages:{" "}
                {country.languages && // we cannot use map here because its not an array
                  // but its an object. so what we do instead is check if the value exists,
                  // and then use map but on the values, which is an array of values.
                  // so now our map is functional.
                  Object.values(country.languages)
                    .slice(0, 2)
                    .map((lang) => {
                      return <span key={Math.random()}>{lang}</span>;
                    })}
              </h2>
              <br />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryData;
