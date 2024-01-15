import React from 'react'
import {FaSchool,FaGraduationCap} from 'react-icons/fa'
import EduCard from './cards/EduCard'

function Education() {
  const educats = [
    {
      icon: <FaGraduationCap></FaGraduationCap>,
      name: "Walchand College of Engineering, Sangli",
      course: "Computer Science Engineering",
      duration: "2021 - 2025", 
    },
    {
      icon: <FaSchool></FaSchool>,
      name: "Daynand Science College, Latur",
      course: "12th HSC Board",
      duration: "2018 - 2020", 
    },
  ]
  return (
    <div id='education' className='mb-20'>
      <h1 className='text-2xl text-orange-500 font-sans font-bold text-center'>Education</h1>
      <div className='grid grid-cols-1 gap-5 py-3'>
      {
          educats.map((educt,i)=>(<EduCard key={i} educt={educt}></EduCard>))
        }
      </div>
    </div>
  )
}

export default Education