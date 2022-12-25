import React from "react";
import { motion } from "framer-motion";
// import image1 from "../Assets/con_5.jpg";
import image1 from "../Assets/image_fav.png";

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
        className="bg-transparent flex justify-center mt-16 "
      >
        <div className="text-[#e4e4e4] flex flex-col mt-16 justify-center items-center">
          <img
            src={image1}
            className="rounded-xl border-1 border-transparent mt-5 imag"
            style={{ width: 300, height: 300 }}
            alt="convoke_5.0"
          />
          <p className="font-marcellus text-6xl font-extrabold text-[#e4e4e4] mt-5 md:text-8xl ">
            Convoke 5.0
          </p>
          <p className="font-Chivo font-semibold mt-5 mb-5 text-2xl md:text-4xl">
            28th - 29th January 2023
          </p>
          <a
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhMz-kuBoJzKng-rCV2OM7_ZgjivTvkvj2gGJs1etUIMYg_w/viewform"
          >
            <button
              type="button"
              className="border-2 border-transparent  mt-5 px-8 font-Chivo font-bold text-lg rounded-md p-2  bg-gray-700 hover:bg-gray-500"
            >
              {" "}
              Register
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
