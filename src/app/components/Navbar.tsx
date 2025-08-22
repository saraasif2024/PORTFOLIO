

'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 
 bg-[#0a192f] 
     backdrop-blur-md text-white flex items-center justify-between px-6 z-50 shadow-md">
      {/* Left - Site Name or Title */}
      <div className="text-lg font-semibold">Sara Asif</div>

      {/* Center - Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#hero" className="hover:text-pink-400">Home</a>
        <a href="#about" className="hover:text-pink-400">About</a>
        <a href="#resume" className="hover:text-pink-400">Resume</a>
        <a href="#portfolio" className="hover:text-pink-400">Portfolio</a>
        <a href="#contact" className="hover:text-pink-400">Contact</a>
      </nav>

      {/* Right - Social Icons + Mobile Toggle */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/saraasif2024"
          className="hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/sara-asif-225111335"
          className="hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-2 focus:outline-none focus:ring-2 focus:ring-pink-400/50 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu - Glassmorphism Dropdown */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full md:hidden px-4">
          <div className="mx-4 rounded-2xl bg-black backdrop-blur-xl border border-white/10 shadow-lg p-6">
            <ul className="flex flex-col items-center gap-4 text-base">
              <li><a href="#hero" onClick={closeMenu} className="hover:text-pink-400">Home</a></li>
              <li><a href="#about" onClick={closeMenu} className="hover:text-pink-400">About</a></li>
              <li><a href="#resume" onClick={closeMenu} className="hover:text-pink-400">Resume</a></li>
              <li><a href="#portfolio" onClick={closeMenu} className="hover:text-pink-400">Portfolio</a></li>
              <li><a href="#contact" onClick={closeMenu} className="hover:text-pink-400">Contact</a></li>
            </ul>

            
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;






