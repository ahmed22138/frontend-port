"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-20 py-8 bg-white text-black dark:bg-[#0A0A0A] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Name + tagline */}
        <div>
          <div className="text-lg font-bold">Ahmed Zahid</div>
          <div className="text-sm opacity-60 mt-1">Frontend Developer & AI Enthusiast</div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-5 items-center">
          <Link
            href="https://github.com/ahmed22138"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/ahmed-malik-a588002b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>

          <Link
            href="mailto:ahmedzahid1149@gmail.com"
            className="hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm opacity-60">
          © {new Date().getFullYear()} Ahmed Zahid. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
