import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './ContactMe'
import Footer from './Footer'

function Home() {
  return (
    <>
        <Banner/>
        <AboutMe/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}
export default Home