import React from "react";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { Speakers } from "../Content";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Speaker = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div  className="scroll-container scroll-smooth py-6 dark:bg-transparent dark:text-gray-100">
        <motion.div id="Speakers" className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-4xl font-bold tracking-wider text-center uppercase">
            Our Speakers
          </p>
          <h1 className="text-sm font-medium leading-none text-center sm:text-3xl">
            The talented people on the screen
          </h1>
          <motion.div
            variants={container}
            initial="hidden"
            exit="exit"
            whileInView="show"
            viewport={{ once: false }}
            className="flex flex-row flex-wrap-reverse justify-center mt-8 "
          >
            {Speakers.map((items, index) => (
              <motion.div key={index} variants={item} >
                <li className="service flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src={items.pic}
                  />
                  <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leading-snug">
                      {items.name}
                    </p>
                    <p>Visual Designer</p>
                  </div>
                  <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                    <a
                      href={items.link_gb}
                      title={items.name_gb}
                      className="dark:text-gray-900 hover:dark:text-blue-400"
                    >
                      <IconContext.Provider value={{ color: "black" }}>
                        <SiGithub />
                      </IconContext.Provider>
                    </a>
                    <a
                      href={items.link_gm}
                      title={items.name_gm}
                      className="dark:text-gray-900 hover:dark:text-blue-400"
                    >
                      <IconContext.Provider value={{ color: "black" }}>
                        <SiGmail />
                      </IconContext.Provider>
                    </a>
                    <a
                      href={items.link_li}
                      title={items.name_li}
                      className="dark:text-gray-900 hover:dark:text-blue-400"
                    >
                      <IconContext.Provider value={{ color: "black" }}>
                        <SiLinkedin />
                      </IconContext.Provider>
                    </a>
                  </div>
                </li>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Speaker;
