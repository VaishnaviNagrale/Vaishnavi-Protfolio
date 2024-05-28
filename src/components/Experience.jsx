import React from 'react';
import { motion } from 'framer-motion';
import sophy from '../assets/images/sophy.jpeg';
import ExpCard from './cards/ExpCard';
import gdsc from '../assets/images/gdsc.png';
import codechef from '../assets/images/codechef.png';

function Experience() {
  const jobs = [
    {
      icon: (
        <motion.div
          className="flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={sophy}
            alt=""
            className="w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-full shadow-2xl"
          />
        </motion.div>
      ),
      jobTitle: "Flutter Developer Intern",
      companyName: "Sophy e-Technologies Pvt. Ltd.",
      duration: "Aug 2023 - Sept 2023",
      des1: "Created a user-friendly childcare app with seamless communication and educational resources.",
      des2: "Collaborated effectively within a team, applying app development skills to contribute to project success.",
    },
    {
      icon: (
        <motion.div
          className="flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={gdsc}
            alt=""
            className="w-1/4 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/6 rounded-full shadow-2xl"
          />
        </motion.div>
      ),
      jobTitle: "App Executive",
      companyName: "GDSC WCE Sangli",
      duration: "Sept 2023 - Feb 2024",
      des1: "Built useful applications and taught others about application development",
      des2: "Organized and presented at various events, notably the 'Flutter Festival 2023'",
    },
    {
      icon: (
        <motion.div
          className="flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={codechef}
            alt=""
            className="w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-full shadow-2xl"
          />
        </motion.div>
      ),
      jobTitle: "Secretary",
      companyName: "CodeChef WCE Chapter",
      duration: "Sept 2023 - April 2024",
      des1: "Managed and maintained club activities.",
      des2: "Scheduled club activities and events, prepared reports and obtained necessary permissions.",
    },
  ];
  return (
    <div id='experience' className='mb-20'>
      <motion.h1
        className='text-2xl text-orange-500 font-sans font-bold text-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Experience
      </motion.h1>
      <motion.div
        className='grid grid-cols-1 gap-5 py-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {jobs.map((job, i) => (
          <ExpCard key={i} job={job}></ExpCard>
        ))}
      </motion.div>
    </div>
  );
}

export default Experience;