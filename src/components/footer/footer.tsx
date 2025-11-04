"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-20 py-6 bg-white text-black dark:bg-[#0A0A0A] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Portfolio Name */}
        <div className="text-lg font-bold">
          Ahmed's Portfolio
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 items-center">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Facebook className="w-6 h-6" />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        {/* Right: Credit */}
        <div className="text-sm opacity-75">
          Made by Ahmed ❤️
        </div>

      </div>
    </footer>
  );
}
