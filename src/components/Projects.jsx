import React from 'react'
import p1 from '../assets/images/c++.png'
import swastyasevaLogo from '../assets/images/swastyaseva-logo.jpg'
import chitchatLogo from '../assets/images/chitchat-logo.png'
import chatgptLogo from '../assets/images/chatgpt-logo.png'
import blogLogo from '../assets/images/blog-website-logo.png'
import webnotesLogo from '../assets/images/webnotes-logo2.jpg'
import portfolioLogo from '../assets/images/portfolio2.jpg'
import ProjectCard from './cards/ProjectCard'

function Projects() {

  const projects = [
    {
      image: swastyasevaLogo,
      title: "स्वास्थ्यसेवा(Swastyaseva)",
      description: "Created an Android hospital management app, utilizing Flutter, Firebase, and MongoDB. Integrated Tesseract OCR for handwritten prescription conversion, achieving 60-70% accuracy for handwritten and 90% for printed text. Streamlined processes and reduced paperwork",
      stack1: "Flutter",
      stack2: "Tesseract OCR",
      stack3: "MongoDB",

      githubLink: "https://github.com/VaishnaviNagrale/HappyCare.git",
      liveLink: "/",
    },
    {
      image: chitchatLogo,
      title: "Chit Chat",
      description: "Developed Android app having a feature-rich real-time chatting app with secure Firebase authentication and efficient data storage. Utilized Flutter for the frontend and Firebase for seamless integration, ensuring a user-friendly and interactive experience.",
      stack1: "Firebase",
      stack2: "Flutter",
      stack3: "OAuth",

      githubLink: "https://github.com/VaishnaviNagrale/ChitChat.git",
      liveLink: "/",
    },
    {
      image: blogLogo,
      title: "BlogX",
      description: "Created a full-stack blog website with React and React-Redux Toolkit, incorporating Tailwind CSS for UI. Leveraged Appwrite for CRUD operations, Tinyurl for blog creation, and Appwrite for data storage and authentication.",
      stack1: "React",
      stack2: "Appwrite",
      stack3: "Tailwind",

      githubLink: "https://github.com/VaishnaviNagrale/Blogx.git",
      liveLink: "https://blogx-ecru.vercel.app/",
    },
    {
      image: chatgptLogo,
      title: "Chatgpt",
      description: "Developed an Android app for ChatGPT website, featuring voice search, real-time AI discussions, and OpenAI API integration for accurate information retrieval. Utilized a provider architecture for effective state management.",
      stack1: "Flutter",
      stack2: "OpenAI API",
      stack3: "Text-to-Voice",

      githubLink: "https://github.com/VaishnaviNagrale/ChatGPT_App.git",
      liveLink: "/",
    },
    {
      image: webnotesLogo,
      title: "Web Notes",
      description: "Developed a secure and user-friendly full-stack CRUD web application for notes management. Utilized HTML, CSS, JavaScript, Bootstrap, Node.js, Express, and MongoDB, ensuring seamless interactions and a visually appealing UI.",
      stack1: "MongoDB",
      stack2: "Javascript",
      stack3: "Express",

      githubLink: "https://github.com/VaishnaviNagrale/Notes-App.git",
      liveLink: "/",
    },
    {
      image: portfolioLogo,
      title: "Protfolio",
      description: "Designed and developed a sleek portfolio website using React, Email.js, and Tailwind CSS. Boasting a beautiful UI, the website offers both visual appeal and practicality. Visitors can seamlessly interact and inquire, enhancing user engagement.",
      stack1: "React",
      stack2: "Tailwind",
      stack3: "Email.js",

      githubLink: "https://github.com/VaishnaviNagrale/Vaishnavi-Protfolio.git",
      liveLink: "https://vaishnavi-nagrale.vercel.app/",
    },
  ]
  return (
    <div id='projects' className='mb-20 items-center'>
      <h1 className='text-2xl text-orange-500 font-sans font-bold text-center'>Projects</h1>
      <div className='lg:flex lg:items-center lg:justify-center lg:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 py-3'>
          {
            projects.map((project,i)=> <ProjectCard key={i} project={project}></ProjectCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Projects