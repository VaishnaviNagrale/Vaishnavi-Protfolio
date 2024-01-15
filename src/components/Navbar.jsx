import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Navbar() {
    const navItems = [
        <>
        <li>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                delay={100}
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                delay={100}
            >
                About Me
            </Link>
        </li>
        <li>
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    delay={100}
                >
                    Experience
                </Link>
            </li><li>
                <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    delay={100}
                    
                >
                    Education
                </Link>
            </li><li>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    delay={100}
                    
                >
                    Skills
                </Link>
            </li><li>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    delay={100}
                    
                >
                    Projects
                </Link>
            </li><li>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    delay={100}
                    
                >
                    Contact Me
                </Link>
            </li></>
    ]
    return (
        <div className='fixed w-11/12 m-auto top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl text-orange-500 font-mono">Vaishnavi Nagrale</a>
                </div>
                <div className="hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar