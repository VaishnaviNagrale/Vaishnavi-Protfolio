import React from "react";
import { motion } from "framer-motion";
import image from "../assets/logo.jpg";

function AboutMe() {
  return (
    <div id="about" className="mb-20 relative">
      <div className="grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center  p-10">
        <div className="z-0 flex items-center justify-between max-w-screen-xl gap-8 p-4 flex-col lg:flex-row-reverse">
          <div>
            <motion.h1
              className="text-2xl text-orange-500 font-sans font-bold text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h1>
            <motion.h1
              className="font-sans md:text-3xl lg:text-3xl sm:text-1xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Introduction
              <br />
              <span className="md:text-3xl lg:text-3xl text-2xl text-orange-500">
                Overview
              </span>
            </motion.h1>
            <motion.p
              className="py-6 text-sm lg:text-lg md:text-lg mb-4 xl:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I'm an <strong>accomplished App Developer</strong> specializing in
              the <strong>Flutter framework</strong>. With a strong foundation
              in <strong>Web Development (MERN Stack)</strong>, I possess
              expertise in <strong>React</strong>, <strong>Node</strong>, and{" "}
              <strong>Express</strong>. My database skills extend across{" "}
              <strong>MySQL</strong>, <strong>MongoDB</strong>, and{" "}
              <strong>Firebase</strong>. Proficient in programming languages
              such as <strong>C</strong> and <strong>C++</strong>, I also have a
              fundamental understanding of <strong>Java</strong> and{" "}
              <strong>Python</strong>. My dedication lies in continually honing
              my <strong>problem-solving abilities</strong>. Beyond technology,
              I am captivated by <strong>emerging technologies</strong> and have
              a keen interest in <strong>astronomy</strong>. I take pride in{" "}
              <strong>creating innovative solutions</strong> and pushing the
              boundaries of what's possible.
            </motion.p>
          </div>
          {/* <img src={image} alt="" className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-lg shadow-2xl' /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
