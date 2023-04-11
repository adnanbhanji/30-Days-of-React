import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #8A2BE2, #4169E1)",
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: 300,
          fontSize: 35,
          textShadow: "2px 2px 4px #000000",
        }}
      >
        30 Days React Challenge - Cat API
      </h1>
      <NavBar />
    </div>
  );
}

export default App;
