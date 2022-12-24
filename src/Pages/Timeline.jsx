import React from "react";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import { Timeline_cont } from "../Content";

const Timeline = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="App-header font-marcellus  text-[#e4e4e4] pt-20 "
      >
        <p className="font-bold ">Timeline</p>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          cardHeight={"auto"}
          focusActiveItemOnLoad
          hideControls
          scrollable
          itemWidth={100}
          cardWidth={300}
          items={Timeline_cont}
          enableOutline
        >
          <div className="text-black">
            <h3>Registration</h3>
          </div>
          <div className="text-black">
            <h3>Briefing</h3>
          </div>
          <div className="text-black">
            <h3>Hackathon starts</h3>
          </div>
          <div className="text-black">
            <h3>Gaming starts</h3>
          </div>
          <div className="text-black">
            <h3>Talk 1</h3>
          </div>
          <div className="text-black">
            <h3>BizTech quiz</h3>
          </div>
          <div className="text-black">
            <h3>Talk 2</h3>
          </div>
          <div className="text-black">
            <h3>Treasure hunt</h3>
          </div>
          <div className="text-black">
            <h3>Keyboard wars</h3>
          </div>
          <div className="text-black">
            <h3>Speed cubing quiz</h3>
          </div>
          <div className="text-black">
            <h3>Talk 3</h3>
          </div>
          <div className="text-black">
            <h3>Hackathon resumes</h3>
          </div>
          <div className="text-black">
            <h3>Hackathon ends</h3>
          </div>
          <div className="text-black">
            <h3>Gaming start</h3>
          </div>
        </Chrono>
      </motion.div>
    </>
  );
};

export default Timeline;
