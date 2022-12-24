import {  motion } from "framer-motion";
import React from "react";

const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="App-header"
    >
      Timeline
    </motion.div>
  );
};

export default Timeline;
