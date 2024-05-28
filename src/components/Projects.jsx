import React from 'react'
import p1 from '../assets/images/c++.png'
import swastyasevaLogo from '../assets/images/swastyaseva-logo.jpg'
import chitchatLogo from '../assets/images/chitchat-logo.png'
import chatgptLogo from '../assets/images/chatgpt-logo.png'
import blogLogo from '../assets/images/blog-website-logo.png'
import webnotesLogo from '../assets/images/webnotes-logo2.jpg'
import portfolioLogo from '../assets/images/portfolio2.jpg'
import smartkidslearningLogo from '../assets/images/SmartLearnerKids.jpg'
import weconnectLogo from '../assets/images/we-connect-logo.png'
import taskifyLogo from '../assets/images/taskifyLogo.png'
import ProjectCard from './cards/ProjectCard'
import { FaEthereum } from 'react-icons/fa'

function Projects() {

  const projects = [
    {
      image: swastyasevaLogo,
      title: "स्वास्थ्यसेवा(Swastyaseva)",
      description: "Swastyaseva is an Android app, developed for hospital management. The app significantly reduces paperwork by digitizing hospital operations. By implementing Tesseract OCR, it converts handwritten prescriptions with 60-70% accuracy and printed text with 90% accuracy. MongoDB is used for secure data storage, while Ethereum Blockchain enhances patient data security.",
      stack1: "Flutter",
      stack2: "Tesseract OCR",
      stack3: "Ethereum Blockchain",

      githubLink: "https://github.com/VaishnaviNagrale/HappyCare.git",
      liveLink: "/",
    },
    {
      image: smartkidslearningLogo,
      title: "SmartLearnerKids",
      description: "This project aids specially-abled children in learning alphabets and digits through a user-friendly website. Built with the MERN Stack, it uses Node.js and MongoDB for authentication, Assembly AI for voice transcription, and PyAudio for recording. Key features include image-based learning, audio guides, and real-time pronunciation feedback. The UI, enhanced with Tailwind CSS and animations, makes learning fun and accessible.",
      stack1: "MERN Stack",
      stack2: "Speech-To-Text",
      stack3: "Python",

      githubLink: "https://github.com/VaishnaviNagrale/SmartLearnerKids.git",
      liveLink: "/",
    },
    {
      image: weconnectLogo,
      title: "WE-Connect",
      description: "WEConnect is an innovative online platform developed with the MERN Stack to empower rural housewives to become entrepreneurs from their homes. Unlike traditional e-commerce sites, WEConnect caters specifically to women from backward communities, enabling them to showcase and sell handmade products and offer services.By bridging rural and urban communities, WEConnect not only fosters economic independence but also preserves India's artisanal heritage.",
      stack1: "React.js",
      stack2: "JWT Token",
      stack3: "Firebase",

      githubLink: "https://github.com/VaishnaviNagrale/WE-Connect.git",
      liveLink: "https://we-connect-seven.vercel.app/",
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
      image: taskifyLogo,
      title: "Taskify",
      description: "Developed an Android app using Flutter that focuses on task management. The app allows users to add, delete, and edit tasks efficiently while providing a visually appealing user interface. I incorporated both dark and light themes to offer users a choice based on their preferences. For data storage, I integrated Firebase, enabling seamless and secure task management across devices. This comprehensive solution ensures users can organize their tasks effectively while enjoying a smooth and intuitive experience.",
      stack1: "Flutter",
      stack2: "Bloc State Managment",
      stack3: "Firebase",

      githubLink: "https://github.com/VaishnaviNagrale/Tasks-App.git",
      liveLink: "/",
    },
    // {
    //   image: portfolioLogo,
    //   title: "Protfolio",
    //   description: "Designed and developed a sleek portfolio website using React, Email.js, and Tailwind CSS. Boasting a beautiful UI, the website offers both visual appeal and practicality. Visitors can seamlessly interact and inquire, enhancing user engagement.",
    //   stack1: "React",
    //   stack2: "Tailwind",
    //   stack3: "Email.js",

    //   githubLink: "https://github.com/VaishnaviNagrale/Vaishnavi-Protfolio.git",
    //   liveLink: "https://vaishnavi-nagrale.vercel.app/",
    // },
  ]
  return (
    <div id='projects' className='mb-20 items-center'>
      <h1 className='text-2xl text-orange-500 font-sans font-bold text-center'>Projects</h1>
      <div className='lg:flex lg:items-center lg:justify-center lg:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 py-5'>
          {
            projects.map((project,i)=> <ProjectCard key={i} project={project}></ProjectCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Projects