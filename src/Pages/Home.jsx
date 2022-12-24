import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="App-header"
      >
        <p className="text-[#e4e4e4]">We will build Convoke'23 5.0 from here</p>
      </motion.div>
    </>
  );
};

export default Home;
