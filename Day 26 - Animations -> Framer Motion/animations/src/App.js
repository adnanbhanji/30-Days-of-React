import { motion } from "framer-motion";
import Rotate from "./Rotate";
import Move from "./Move";
import KeyFrames from "./KeyFrames";

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <motion.div
        animate={{ x: 100 }}
        style={{ height: 100, width: 100, background: "rgba(0,0,0,0.4)" }}
      ></motion.div>
      <motion.div
        animate={{ x: 100, y: 100 }}
        style={{ height: 100, width: 100, background: "rgba(0,0,0,0.4)" }}
      ></motion.div>
      <motion.div
        animate={{ x: 100, y: 200, scale: 1 }}
        initial={{ scale: 0 }}
        style={{ height: 100, width: 100, background: "rgba(0,0,0,0.4)" }}
      ></motion.div>
      <Rotate />
      <Move />
      <KeyFrames />
    </div>
  );
}

export default App;
