import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar() {
    const navItems = [
        { label: 'Home', to: 'home' },
        { label: 'About Me', to: 'about' },
        { label: 'Experience', to: 'experience' },
        { label: 'Education', to: 'education' },
        { label: 'Skills', to: 'skills' },
        { label: 'Projects', to: 'projects' },
        { label: 'Contact Me', to: 'contact' }
    ];

    return (
        <div className='fixed w-11/12 m-auto top-0 z-50 bg-base-100'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <motion.ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        activeClass="text-orange-500"
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        delay={100}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                    <motion.a
                        href='/'
                        className="btn btn-ghost text-xl text-orange-500 font-mono"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Vaishnavi Nagrale
                    </motion.a>
                </div>
                <div className="hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    activeClass="text-orange-500"
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    delay={100}
                                >
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
