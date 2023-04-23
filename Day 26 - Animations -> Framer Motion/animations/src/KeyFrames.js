import React, { useState } from "react";
import { motion } from "framer-motion";

const KeyFrames = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 200, 200, 0], x: [0, 200, 200, 0] }}
      //   transition={{ repeat: 2, duration: 2 }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ height: 100, width: 100, background: "rgba(0,0,0,0.4)" }}
    ></motion.div>
  );
};

export default KeyFrames;
