import React, { useState } from "react";
import { motion } from "framer-motion";

const Rotate = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <motion.div
      animate={{ rotate: rotate ? 360 : 0 }}
      onClick={() => setRotate(!rotate)}
      style={{ height: 100, width: 100, background: "rgba(0,0,0,0.4)" }}
    ></motion.div>
  );
};

export default Rotate;
