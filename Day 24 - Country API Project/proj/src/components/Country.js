import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryData from "./CountryData";

const Country = () => {
  const [respData, setRespData] = useState(null);
  useEffect(() => {
    const InnerFetch = async () => {
      let url1 = "https://restcountries.com/v3.1/all";
      try {
        const response = await axios.get(url1);
        setRespData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    InnerFetch();
  }, []);
  console.log(respData);

  return (
    <div>{respData ? <CountryData respData={respData} /> : "Loading"}</div>
  );
};

export default Country;
