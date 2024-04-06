import React from 'react';
import image from '../assets/logo.jpg';
import resume from '../assets/Vaishnavi_Nagrale_Resume_2k24.pdf'

function AboutMe() {
  return (
    <div id='about' className='mb-20 relative'>
      <div className='grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center  p-10'>
        <div className='z-0 flex items-center justify-between max-w-screen-xl gap-8 p-4 flex-col lg:flex-row-reverse'>
          <div>
            <h1 className='text-2xl text-orange-500 font-sans font-bold text-center mb-8'>About Me</h1>
            <br />
            <h1 className='font-sans md:text-3xl lg:text-3xl sm:text-1xl'>
              Introduction
              <br />
              <span className='md:text-3xl lg:text-3xl text-2xl text-orange-500'>
                Overview
              </span>
            </h1> 
            <p className='py-6 text-sm lg:text-lg md:text-lg'>
              I'm an accomplished App Developer specializing in the Flutter framework. With a strong foundation in Web Development(MERN Stack), I possess expertise in React, Node, and Express. My database skills extend across MySQL, MongoDB, and Firebase.

              Proficient in programming languages such as C and C++, I also have a fundamental understanding of Java and Python. My dedication lies in continually honing my problem-solving abilities.

              Beyond technology, I am captivated by emerging technologies and have a keen interest in astronomy.
              I take pride in creating innovative solutions and pushing the boundaries of what's possible.

            </p>
            <a href={resume} download="Vaishnavi_Nagrale_CV" className='btn btn-accent'>
              Download CV
            </a>
          </div>
          {/* <img src={image} alt="" className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-lg shadow-2xl' /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
