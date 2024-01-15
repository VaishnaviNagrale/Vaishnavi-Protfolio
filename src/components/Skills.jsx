import React from 'react'
import cpp from '../assets/images/c++.png'
import bootstrap from '../assets/images/bootstrap.png'
import css from '../assets/images/css.png'
import figma from '../assets/images/figma.png'
import firebase from '../assets/images/firebase.png'
import flutter from '../assets/images/flutter.png'
import git from '../assets/images/git.png'
import html from '../assets/images/html.png'
import java from '../assets/images/java.png'
import mysql from '../assets/images/mysql.png'
import python from '../assets/images/python.png'
import c from '../assets/images/c.png'
import react from '../assets/images/react.png'
import tailwindcss from '../assets/images/tailwindcss.png'
import nodejs from '../assets/images/nodejs.png'
import expressjs from '../assets/images/expressjs.png'
import mongodb from '../assets/images/mongodb.png'
import js from '../assets/images/js.png'
import dsa from '../assets/images/dsa.png'

function Skills() {
  const skillData = [
    { icon: <img src={cpp} alt="C++" className="w-16 h-16" />, name: 'C++' },
    { icon: <img src={c} alt="C" className="w-16 h-16"  />, name: 'C language' },
    { icon: <img src={java} alt="Java" className="w-16 h-16"  />, name: 'Java' },
    { icon: <img src={python} alt="Python" className="w-16 h-16"  />, name: 'Python' },
    { icon: <img src={dsa} alt="DSA" className="w-16 h-16"  />, name: 'DSA' },
    { icon: <img src={flutter} alt="HTML5" className="w-16 h-16"  />, name: 'Flutter' },
    { icon: <img src={html} alt="HTML5" className="w-16 h-16"  />, name: 'HTML5' },
    { icon: <img src={css} alt="HTML5" className="w-16 h-16"  />, name: 'CSS3' },
    { icon: <img src={js} alt="HTML5" className="w-16 h-16" />, name: 'Javascript' },
    { icon: <img src={react} alt="HTML5" className="w-16 h-16"  />, name: 'React.Js' },
    { icon: <img src={nodejs} alt="HTML5" className="w-16 h-16" />, name: 'Node.Js' },
    { icon: <img src={expressjs} alt="HTML5" className="w-16 h-16" />, name: 'Express.Js' },
    { icon: <img src={mysql} alt="HTML5" className="w-16 h-16"  />, name: 'MySql' },
    { icon: <img src={mongodb} alt="HTML5" className="w-16 h-16" />, name: 'MongoDB' },
    { icon: <img src={firebase} alt="HTML5" className="w-16 h-16" />, name: 'Firebase' },
    { icon: <img src={tailwindcss} alt="HTML5" className="w-16 h-16" />, name: 'Tailwind CSS' },
    { icon: <img src={bootstrap} alt="HTML5" className="w-16 h-16"  />, name: 'Bootstrap' },
    { icon: <img src={git} alt="HTML5" className="w-16 h-16" />, name: 'Git' },
    { icon: <img src={figma} alt="HTML5" className="w-16 h-16" />, name: 'Figma' },
  ]
  return (
    <div id='skills' className='mb-20'>
      <h1 className='text-2xl text-orange-500 font-sans font-bold text-center mb-8'>Skills</h1>
      <h3 className='text-center mb-8'>Here are my technical skills that I have acquired and continuously improve upon in my
        journey as a developer!</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8 mt-8">
        {skillData.map((skill, index) => (
          <div key={index} className="flex items-center justify-center p-4 shadow-lg rounded-md hover:transform hover:scale-125 transition-transform duration-200">
            {skill.icon}
            <span className="ml-2 font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills