import React from 'react';
import { motion } from 'framer-motion';
import cpp from '../assets/images/c++.png';
import bootstrap from '../assets/images/bootstrap.png';
import css from '../assets/images/css.png';
import figma from '../assets/images/figma.png';
import firebase from '../assets/images/firebase.png';
import flutter from '../assets/images/flutter.png';
import git from '../assets/images/git.png';
import html from '../assets/images/html.png';
import java from '../assets/images/java.png';
import mysql from '../assets/images/mysql.png';
import python from '../assets/images/python.png';
import c from '../assets/images/c.png';
import react from '../assets/images/react.png';
import tailwindcss from '../assets/images/tailwindcss.png';
import nodejs from '../assets/images/nodejs.png';
import expressjs from '../assets/images/expressjs.png';
import mongodb from '../assets/images/mongodb.png';
import js from '../assets/images/js.png';
import dsa from '../assets/images/dsa.png';

function Skills() {
  const skillData = [
    { icon: cpp, name: 'C++' },
    { icon: c, name: 'C language' },
    { icon: java, name: 'Java' },
    { icon: python, name: 'Python' },
    { icon: dsa, name: 'DSA' },
    { icon: flutter, name: 'Flutter' },
    { icon: html, name: 'HTML5' },
    { icon: css, name: 'CSS3' },
    { icon: js, name: 'Javascript' },
    { icon: react, name: 'React.Js' },
    { icon: nodejs, name: 'Node.Js' },
    { icon: expressjs, name: 'Express.Js' },
    { icon: mysql, name: 'MySql' },
    { icon: mongodb, name: 'MongoDB' },
    { icon: firebase, name: 'Firebase' },
    { icon: tailwindcss, name: 'Tailwind CSS' },
    { icon: bootstrap, name: 'Bootstrap' },
    { icon: git, name: 'Git' },
    { icon: figma, name: 'Figma' },
  ];

  return (
    <div id='skills' className='mb-20'>
      <motion.h1
        className='text-2xl text-orange-500 font-sans font-bold text-center mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <motion.h3
        className='text-center mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are my technical skills that I have acquired and continuously improve upon in my journey as a developer!
      </motion.h3>
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 shadow-lg rounded-md hover:transform hover:scale-125 transition-transform duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <span className="ml-2 font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
