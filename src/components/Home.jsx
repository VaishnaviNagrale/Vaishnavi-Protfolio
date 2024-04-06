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



// import React from 'react';
// import Navbar from './Navbar';
// import Banner from './Banner';
// import AboutMe from './AboutMe';
// import Experience from './Experience';
// import Education from './Education';
// import Skills from './Skills';
// import Projects from './Projects';
// import Contact from './ContactMe';
// import Footer from './Footer';
// import VideoBackground from './VideoBackground';
// import videoUrl from '../assets/bg2.mp4';

// function Home() {
//   return (
//     <div className="relative">
//       <VideoBackground videoUrl={videoUrl} />
//       <div className="absolute top-0 left-0 w-full h-full z-10">
//         <div className="container mx-auto">
//           <Navbar />
//           <Banner />
//           <AboutMe />
//           <Experience />
//           <Education />
//           <Skills />
//           <Projects />
//           <Contact />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
