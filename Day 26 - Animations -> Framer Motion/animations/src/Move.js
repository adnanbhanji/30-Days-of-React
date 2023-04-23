import React, { useState } from "react";
import { motion } from "framer-motion";

const Rotate = () => {
  const [move, setMove] = useState(true);
  return (
    <motion.div
      animate={{ x: move ? 200 : 400, y: 200 }}
      //   transition={{ delay: 1 }}
      //   transition={{ type: "tween", duration: 5 }}
      //   transition={{ type: "spring", bounce: 1 }}
      //   transition={{ type: "inertia", velocity: 30 }}
      onClick={() => setMove(!move)}
      style={{ height: 100, width: 100, background: "rgba(0,0,0,0.4)" }}
    ></motion.div>
  );
};

export default Rotate;
