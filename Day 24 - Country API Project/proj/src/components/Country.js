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
    <div className="">
      {" "}
      {respData ? (
        <>
          <div className="bg-gray-200 p-6">
            <h1 className="text-center text-6xl font-bold font-sans text-yellow-500 tracking-wide mb-4">
              World Countries Data
            </h1>
            <h3 className="text-center font-bold text-gray-600 text-2xl mb-4">
              Currently, we have {respData.length} countries
            </h3>
          </div>

          <CountryData respData={respData} />
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Country;
