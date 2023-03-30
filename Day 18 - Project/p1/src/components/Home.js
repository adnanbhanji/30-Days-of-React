import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [respData, setRespData] = useState(null);
  useEffect(() => {
    const InnerFetch = async () => {
      let url1 = "https://api.thecatapi.com/v1/breeds";
      try {
        const response = await axios.get(url1);
        setRespData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    InnerFetch();
  }, []);
  useEffect(() => {
    console.log(respData);
  }, [respData]);

  return (
    <div>
      {respData ? <MapData data={respData} /> : <div>Loading data...</div>}
    </div>
  );
};

const MapData = ({ respData }) => {
  if (!respData) {
    return <div>Data is loading...</div>;
  }
  console.log(respData);
  console.log("respData");
};

const Home = () => {
  return (
    <div>
      <FetchData />
      <h1>Welcome to the 30 Days React Challenge</h1>
      <h3>Project On Cat - API </h3>
      <h4>Cats Paradise - Fun Facts</h4>
      <h4>There are x cat breeds</h4>
      <h4>An average cat can weight about X kg and lives X years. </h4>
      <h3>Breed of Cat</h3>
      <img src="" alt="" />
    </div>
  );
};

export default Home;
