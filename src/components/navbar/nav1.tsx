"use client";
import React, { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RiRobot2Fill } from "react-icons/ri";
import Link from "next/link";

const BlurNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 backdrop-blur-md
        bg-white/70 text-black
        dark:bg-[#0A0A0A] dark:text-white
        shadow-sm transition-colors duration-500
      "
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className="lg:ml-14 font-semibold text-lg">
            Portfolio
          </span>
        </div>

        {/* Center: Menu (Desktop) */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/faq" className="hover:text-blue-600 dark:hover:text-gray-300 transition">
            Team
          </Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center space-x-5 mr-14">
          <AnimatedThemeToggler className="text-blue-600 " />
          <Link href="/chat"><RiRobot2Fill className="text-3xl  text-black dark:text-white"/></Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            lg:hidden backdrop-blur-lg 
            bg-white/80 text-black
            dark:bg-black/80 dark:text-white
            flex flex-col items-center space-y-4 py-6 shadow-md transition-colors duration-500
          "
        >
          <Link href="/" className="hover:text-blue-600 dark:hover:text-gray-300 transition">Home</Link>
          <Link href="/faq" className="hover:text-blue-600 dark:hover:text-gray-300 transition">Team</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-gray-300 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-gray-300 transition">Contact</Link>
          <div className="flex space-x-3 pt-4">
            <AnimatedThemeToggler/>
             <a href="/chat"><RiRobot2Fill  className="mt-3 text-2xl"/></a>
           
          </div>
        </div>
      )}
    </header>
  );
};

export default BlurNavbar;
