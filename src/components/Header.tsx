'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./link";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-black z-2 border-b border-gray-300">
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Trixtern</span>
              <Image
                className="dark:invert"
                src="/pcquicker1.png"
                alt="Trixtern Technologies"
                width={180}
                height={38}
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            <CustomLink href="../">Home</CustomLink>
            <CustomLink href="/home#about">About</CustomLink>
            <CustomLink href="/pc_build">Custom PC Build</CustomLink>
            <CustomLink href="/home#services">Services</CustomLink>
            <CustomLink href="/home#faq">FAQ&apos;s</CustomLink>
            {/* <CustomLink href="/blogs">Blogs & Insights</CustomLink> */}
            {/* <CustomLink href="/careers">Careers</CustomLink> */}
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact-us" className="text-sm font-semibold leading-6 text-gray-900 dark:text-purple-500">
              Contact Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-6 pb-6 dark:text-gray-300 dark:bg-black">
              <Link href="/" className="block text-sm font-semibold leading-6">
                Home
              </Link>
              <Link href="/home#about" className="block text-sm font-semibold leading-6 ">
                About
              </Link>
              <Link href="/pc_build" className="block text-sm font-semibold leading-6">
                Custom PC Build
              </Link>
              <Link href="/home#services" className="block text-sm font-semibold leading-6">
                Services
              </Link>
              <Link href="/home#faq" className="block text-sm font-semibold leading-6 ">
                FAQ&apos;s
              </Link>
              {/* <Link href="/blogs" className="block text-sm font-semibold leading-6 text-gray-900">
                Blogs & Insights
              </Link> */}
              
              {/* <Link href="/careers" className="block text-sm font-semibold leading-6 text-gray-900">
                Careers
              </Link> */}
              <Link href="/contact-us" className="block text-sm font-semibold leading-6 ">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-red-600">
              
              
              </div>
    </div>
  );
}