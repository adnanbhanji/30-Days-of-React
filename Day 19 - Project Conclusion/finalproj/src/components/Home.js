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
        //console.log(respData2);
        //console.log(breed);
      } catch (error) {
        console.error(error);
      }
    };
    getBreed();
  }, []);

  return (
    <div
      className="main-content"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "black",
        // margin: "",
        //background: "linear-gradient(to bottom, #8A2BE2, #4169E1)",
      }}
    >
      <h4
        style={{
          color: "#023020",
          fontSize: 22,
          textShadow: "0.5px 0.5px 0 #FFFFFF",
          margin: "5px 2px",
        }}
      >
        Cats Paradise - Fun Facts
      </h4>
      {respData2 && (
        <>
          <h4
            style={{
              color: "#cccccc",
              fontSize: 22,
            }}
          >
            There are{" "}
            <span style={{ color: "#FFA500" }}>{respData.length}</span> cat
            breeds
          </h4>
          <h4
            style={{
              color: "#cccccc",
              fontSize: 22,
              margin: "2px 2px",
            }}
          >
            An average <span style={{ color: "#FFA500" }}>{breed.name}</span>{" "}
            cat can weight about{" "}
            <span style={{ color: "#FFA500" }}>{breed.weight.imperial}</span> kg
            and lives {breed.life_span} years.
          </h4>
          <h3>Breed of Cat: {breed.name}</h3>
          <br />
          {respData2 && (
            <img
              style={{ width: 350, height: 350 }}
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
      <FetchData />
    </div>
  );
};

export default Home;
