"use client";
import React, { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const BlurNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-5/50 text-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center">
          <span className="lg:ml-14 font-semibold text-lg ">
            Portfolio
          </span>
        </div>

        {/* Center: Menu (Desktop) */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">Team</a>
          <a href="#" className="hover:text-gray-300 transition">Feature</a>
          <a href="#" className="hover:text-gray-300 transition">Blog</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <AnimatedThemeToggler className="text-blue-600"/>
          <button className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
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
        <div className="lg:hidden bg-black/80 backdrop-blur-lg text-white flex flex-col items-center space-y-4 py-6 shadow-md">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">Team</a>
          <a href="#" className="hover:text-gray-300 transition">Feature</a>
          <a href="#" className="hover:text-gray-300 transition">Blog</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
          <div className="flex space-x-3 pt-4">
            <button className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default BlurNavbar;
