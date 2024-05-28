import React from 'react';
import { motion } from 'framer-motion';
import pic from '../assets/images/Vaishnavi-pic.jpg';

function Banner() {
  return (
    <div id='home' className='mb-20 mt-20 py-10'>
      <div className='grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center py-10'>
        <div className='z-0 flex items-center justify-around max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse'>
          <motion.img
            src={pic}
            alt=''
            className='w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-full border-2 border-white shadow-2xl'
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <div>
            <motion.h1
              className='font-sans md:text-5xl lg:text-5xl sm:text-3xl'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi!<br></br> I am{" "}<span className='text-orange-500 font-bold font-serif'>Vaishnavi Nagrale</span>
            </motion.h1>
            <motion.p
              className='py-6 text-md lg:text-lg md:text-lg xl:text-xl'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I specialize in crafting robust and dynamic applications,<br/> both for the web and mobile platforms, to bring<br/> your ideas to life with innovation and expertise.
            </motion.p>
            <motion.a
    href="mailto:vaishnavinagrale534@gmail.com"
    className="btn btn-accent"
>
    Contact Me
</motion.a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
