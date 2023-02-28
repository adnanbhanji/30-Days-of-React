import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <>
      <h1 style={{ fontSize: 45, fontFamily: "monospace" }}>30 Days React</h1>
      <h3 style={{ fontSize: 25, fontWeight: 100 }}> World Population</h3>{" "}
      <br />
      <h5
        style={{
          fontSize: 14,
          marginTop: "-10px",
          fontFamily: "inherit",
          fontWeight: 100,
        }}
      >
        Ten most populated countries
      </h5>
    </>
  );
};

const width = (tenHighestPopulation) => {
  let new_arr = [];
  let total_pop = 0;
  tenHighestPopulation.map((country) => {
    new_arr.push(country.population);
    return 0;
  });
  for (let i = 0; i < new_arr.length; i++) {
    total_pop += new_arr[i];
  }
  return total_pop;
};

const Data = () => {
  const tenHighestPopulation = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "USA", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russia", population: 146599183 },
    { country: "Japan", population: 126960000 },
  ];
  width(tenHighestPopulation);
  return tenHighestPopulation.map((ind_country) => {
    return (
      <div
        className="box"
        style={{
          height: "35px",
          width: "60vw",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
        key={ind_country.country}
      >
        <div
          className="countryname"
          style={{
            width: 125,

            display: "flex",
            justifyContent: "flex-start",
            //background: "red",
          }}
        >
          <p style={{ fontFamily: "monospace", fontSize: 14 }}>
            {ind_country.country.toUpperCase()}
          </p>
        </div>
        <div
          className="bar"
          style={{
            width: 700,
            background: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: `${
                (ind_country.population / width(tenHighestPopulation)) * 100
              }%`,
              background: "orange",
              border: "none",
              borderRadius: "5px",
            }}
          ></div>
          <div
            style={{
              width: `${
                (1 - ind_country.population / width(tenHighestPopulation)) * 100
              }%`,
              background: "whitesmoke",
              border: "none",
              borderRadius: "5px",
            }}
          ></div>
        </div>
        <div
          className="population"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 125,
          }}
        >
          <p style={{ fontFamily: "monospace", fontSize: 14 }}>
            {ind_country.population}
          </p>
        </div>
      </div>
    );
  });
};

const App = () => {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Data />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
