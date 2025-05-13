'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>('#home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed top-0 w-full bg-transparent z-50 shadow-md flex items-center justify-between px-5 py-3">
      {/* Logo */}
      <div className="flex-1">
        <Image
          className="dark:invert"
          src="/pcquicker.png" // Replace with your logo path
          alt="pcQuicker Logo"
          width={130}
          height={38}
          priority
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-2 flex justify-center gap-5">
        {['#home', '#about', '#services', '#features'].map((link) => (
          <a
            key={link}
            href={link}
            onClick={() => handleLinkClick(link)}
            className={`text-sm md:text-base transition-colors duration-300 ${
              activeLink === link ? 'font-bold text-white' : 'text-gray-300'
            }`}
          >
            {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
          </a>
        ))}
      </nav>

      {/* Contact Us */}
      <div className="flex-1 flex justify-end">
        <a
          href="#contact"
          className="text-sm md:text-base font-bold bg-purple-600 text-white  px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-300 hover:text-black"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
