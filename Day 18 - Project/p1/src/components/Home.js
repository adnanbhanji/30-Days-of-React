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
  // useEffect(() => {
  //   console.log(respData);
  // }, [respData]);

  return <div>{respData ? <MapData respData={respData} /> : "Loading"}</div>;
};

const MapData = ({ respData }) => {
  const [breed, setBreed] = useState({ name: "" });
  const [respData2, setRespData2] = useState(null);

  useEffect(() => {
    const getBreed = async () => {
      const breed = await respData[Math.floor(Math.random() * respData.length)];
      setBreed(breed);
      const url2 = `https://api.thecatapi.com/v1/images/search?breed_id=${breed.id}`;
      try {
        const response2 = await axios.get(url2);
        setRespData2(response2.data);
        // console.log(respData2);
      } catch (error) {
        console.error(error);
      }
    };
    getBreed();
  }, []);

  return (
    <div>
      <h4>Cats Paradise - Fun Facts</h4>
      {respData2 && (
        <>
          <h4>There are {respData.length} cat breeds</h4>
          <h4>An average cat can weight about X kg and lives X years. </h4>
          <h3>Breed of Cat: {breed.name}</h3>
          {respData2 && (
            <img
              style={{ width: 250, height: 250 }}
              src={respData2[0].url}
              alt=""
            />
          )}
        </>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the 30 Days React Challenge</h1>
      <h3>Project On Cat - API </h3>
      <FetchData />
    </div>
  );
};

export default Home;
