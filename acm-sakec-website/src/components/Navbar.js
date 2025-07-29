import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: 'hero', title: 'Home' },
    { to: 'about', title: 'About' },
    { to: 'team', title: 'Team' },
    { to: 'events', title: 'Events' },
    { to: 'gallery', title: 'Gallery' },
    { to: 'contact', title: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center">
        <RouterLink to="/" className="text-2xl font-bold">
          ACM SAKEC
        </RouterLink>
        <button onClick={toggleMenu} className="z-50">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center z-40"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                className="text-4xl my-4 cursor-pointer"
                onClick={toggleMenu}
              >
                {link.title}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
