import React from 'react'
import { FaGoogle, FaDev } from 'react-icons/fa'
import ExpCard from './cards/ExpCard'
import gdsc from '../assets/images/gdsc.png'
import codechef from '../assets/images/codechef.png'

function Experience() {
  const jobs = [
    {
      icon: (
        <div className="flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-200">
        <img
          src="https://media.licdn.com/dms/image/C560BAQFLeeoPo_F1gA/company-logo_200_200/0/1631383560262?e=1713398400&v=beta&t=WTjxe8aKLdL00oOcSQcn2lMGDwsBwouiBcYt5WB0iLU"
          alt=""
          className="w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-full shadow-2xl"
        />
      </div>
      
      ),
      jobTitle: "Flutter Developer Intern",
      companyName: "Sophy e-Technologies Pvt. Ltd.",
      duration: "Aug 2023 - Sept 2023",
      des1: "Created a user-friendly childcare app with seamless communication and educational resources.",
      des2:"Collaborated effectively within a team, applying app development skills to contribute to project success.",
    },
    {
      icon: (
        <div className="flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-200">
          <img
            src={gdsc}
            alt=""
            className="w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/6 rounded-full shadow-2xl"
          />
        </div>

      ),
      jobTitle: "App Exceutive",
      companyName: "GDSC WCE Sangli",
      duration: "Sept 2023 - Present",
      des1: "Built useful applications and taught others about application development",
      des2: "Organized and presented at various events, notably the 'Flutter Festival 2023'",
    },
    {
      icon: (
        <div className="flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-200">
  <img
    src={codechef}
    alt=""
    className="w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-full shadow-2xl"
  />
</div>

      ),
      jobTitle: "Secretary",
      companyName: "CodeChef WCE Chapter",
      duration: "Sept 2023 - Present",
      des1: "Managed and maintained club activities.",
      des2: "Scheduled club activities and events, prepared reports and obtained necessary permissions.",
    },
  ]
  return (
    <div id='experience' className='mb-20'>
      <h1 className='text-2xl text-orange-500 font-sans font-bold text-center'>Experience</h1>
      <div className='grid grid-cols-1 gap-5 py-3'>
        {
          jobs.map((job, i) => (<ExpCard key={i} job={job}></ExpCard>))
        }
      </div>
    </div>
  )
}

export default Experience