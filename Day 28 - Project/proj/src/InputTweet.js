import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const InputTweet = () => {
  const [allData, setAllData] = useState([
    {
      tweet:
        "React.js is a powerful and flexible JavaScript library that has become increasingly popular for building user interfaces. It allows developers to easily create reusable UI components and declaratively render them to the DOM, making development faster and more efficient.",
      time: "April 28, 2023 at 1:40:20 PM",
      first_name: "Adnan",
      last_name: "Bhanji",
    },
    {
      tweet:
        "With React.js, developers can build complex UIs with ease by breaking them down into small, modular components. This not only simplifies the development process, but also allows for easy maintenance and updates.",
      time: "April 28, 2023 at 2:40:01 PM",
      first_name: "Adnan",
      last_name: "Bhanji",
    },
    {
      tweet:
        "React.js is known for its performance and speed due to its efficient rendering methods and virtual DOM. This makes it a great choice for building applications that require real-time updates or high levels of interactivity.",
      time: "April 28, 2023 at 2:44:23 PM",
      first_name: "Adnan",
      last_name: "Bhanji",
    },
    {
      tweet:
        "React.js has a thriving ecosystem with a vast array of tools, libraries, and resources available to developers. This means that developers can quickly and easily find solutions to problems and add functionality to their applications, making development faster and more efficient.",
      time: "April 28, 2023 at 2:56:10 PM",
      first_name: "Adnan",
      last_name: "Bhanji",
    },
  ]);
  const [tweet, setTweet] = useState("");
  const [data, setData] = useState({});

  const getTime = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const localTime = now.toLocaleString("en-US", options);
    return localTime;
  };

  const submitTweet = (e) => {
    e.preventDefault();
    console.log("success");
    setData({
      tweet: tweet,
      time: getTime(),
      first_name: "Adnan",
      last_name: "Bhanji",
    });
    setAllData((prevAllData) => [
      ...prevAllData,
      {
        tweet: tweet,
        time: getTime(),
        first_name: "Adnan",
        last_name: "Bhanji",
      },
    ]);
  };

  useEffect(() => {
    console.log(data);
    console.log(allData);
  }, [data, allData]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form action="">
        <input
          type="text"
          placeholder="Tweet about 30 days of react..."
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          style={{
            width: 400,
            height: 100,
            background: "#fffef5",
            fontSize: 16,
            border: "1px #fffad7 solid",
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={submitTweet}
          style={{
            width: 100,
            height: 40,
            background: "skyblue",
            borderRadius: 5,
            border: "none",
            color: "whitesmoke",
          }}
        >
          Submit
        </button>

        <br />
        <br />

        {allData.map((value) => {
          return (
            <div
              key={Math.random()}
              style={{
                width: 600,
                minHeight: 100,
                border: "lightgray 1px solid ",
                marginBottom: 5,
              }}
            >
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <span style={{ marginLeft: 10 }}>
                  {
                    <AccountCircleIcon
                      style={{ height: 50, width: 40, color: "gray" }}
                    />
                  }
                </span>
                <span style={{ marginLeft: 5, marginRight: 5 }}>
                  {value.first_name}
                </span>
                <span style={{ marginRight: 10 }}>{value.last_name} </span>
                <span style={{ color: "#8e8e8e" }}>
                  {" "}
                  @{value.first_name.toLowerCase()}
                </span>
              </h3>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: 1.5,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                {value.tweet}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <span>
                  {<EditIcon style={{ color: "skyblue", margin: 2 }} />}{" "}
                  {<DeleteIcon style={{ color: "skyblue", margin: 2 }} />}
                </span>
                <span>
                  {<ChatBubbleOutlineIcon style={{ margin: 2 }} />}{" "}
                  {<FavoriteBorderIcon style={{ margin: 2 }} />}{" "}
                  {<ShareIcon style={{ margin: 2 }} />}
                </span>
                <span>{value.time}</span>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default InputTweet;
