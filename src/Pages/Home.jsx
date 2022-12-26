import React from "react";
import { motion } from "framer-motion";
// import image1 from "../Assets/con_5.jpg";
import image1 from "../Assets/image_fav.png";
import Speaker from "../Components/Speaker";

const Home = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, scale: 0 },
  };

  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: easing,
      },
    },
  };


  const btnGroup = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate">
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="bg-transparent flex justify-center mt-16 "
      >
        <div className="text-[#e4e4e4] flex flex-col mt-16 mb-10 justify-center items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ rotate: [0, 360], scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={image1}
              className="rounded-xl border-1 border-transparent mt-5 imag"
              style={{ width: 300, height: 300 }}
              alt="convoke_5.0"
            />
          </motion.div>
          <motion.span variants={fadeInUp}>
            <p className="font-marcellus text-6xl font-extrabold text-[#e4e4e4] mt-5 md:text-8xl ">
              Convoke 5.0
            </p>
          </motion.span>
          <motion.span variants={fadeInUp}>
            <p className="font-Chivo font-semibold mt-5 mb-5 text-2xl md:text-4xl">
              28th - 29th January 2023
            </p>
          </motion.span>
          <motion.div className="btn_group" variants={stagger}>
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhMz-kuBoJzKng-rCV2OM7_ZgjivTvkvj2gGJs1etUIMYg_w/viewform"
            >
              <motion.div
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-transparent  mt-5 px-8 font-Chivo font-bold text-lg rounded-md p-2  bg-gray-700 hover:bg-gray-500"
              >
                {" "}
                Register
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <Speaker />
    </motion.div>
  );
};

export default Home;
