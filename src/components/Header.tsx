'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="dark:invert fixed top-0 w-full bg-black z-50 shadow-md flex items-center justify-between px-5 py-3">
      {/* Logo */}
      <div className="flex-1">
        <Image
          src="/pcquicker.png" // Replace with your logo path
          alt="pcQuicker Logo"
          width={130}
          height={38}
          priority
        />
      </div>

      {/* Menu Button */}
      <div className="flex-1 flex justify-end md:hidden">
        <button
          onClick={toggleMenu}
          className= "dark:invert text-white bg-purple-600 px-4 py-2 rounded-md transition-all duration-300 hover:bg-purple-700"
        >
          Menu
        </button>
      </div>

      {/* Navigation Links (Hidden on mobile) */}
      <nav 
        className={`absolute top-16 right-0 bg-black w-full md:static md:flex md:w-auto md:gap-5 md:items-center transition-transform duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {['#home', '#about', '#services', '#features'].map((link) => (
          <a
            key={link}
            href={link}
            className="block text-sm md:text-base text-gray-300 px-5 py-3 hover:text-white"
          >
            {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
          </a>
        ))}
        <a
          href="#contact"
          className="dark:invert block text-sm md:text-base font-bold  text-gray-700 px-5 py-3 rounded-md hover:bg-gray-300 hover:text-black"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
