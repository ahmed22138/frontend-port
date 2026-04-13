"use client";

import BlurNavbar from "@/components/navbar/nav1";
import { motion } from "framer-motion";

export default function AboutSection() {
  return ( 
   <>
   <BlurNavbar/>
    <div>
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto px-6 py-16 space-y-10 md:space-y-0 mt-20"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center md:w-1/2"
      >
        <img
          src="/xml.png" // 👈 apna image yahan lagao (public folder me me.jpg)
          alt="Profile"
          className="w-60 h-[400px] md:w-72 md:h-[500px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Me</span>
        </h2>

       <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
  Hi 👋, I’m <span className="font-semibold text-indigo-500">Ahmed Zahid</span> — a passionate{" "}
  <span className="text-purple-500 font-medium">Frontend Developer</span> specializing in{" "}
  <span className="text-indigo-500 font-medium">Next.js</span>,{" "}
  <span className="text-purple-500 font-medium">TypeScript</span>, and{" "}
  <span className="text-indigo-500 font-medium">Tailwind CSS</span>. I build modern, responsive
  interfaces with smooth animations and clean code.
</p>

<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
  I also integrate AI-powered features using{" "}
  <span className="text-purple-500 font-medium">Python</span>,{" "}
  <span className="text-indigo-500 font-medium">FastAPI</span>, and the{" "}
  <span className="text-purple-500 font-medium">Google Gemini API</span> — turning creative ideas
  into powerful products. I’m always learning and love pushing the limits of what the web can do 🚀
</p>

        <div className="flex flex-wrap gap-3 mt-2 mb-6">
          {["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Gemini AI", "GSAP", "Framer Motion"].map((skill) => (
            <span key={skill} className="px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full">
              {skill}
            </span>
          ))}
        </div>

        <motion.a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          View My Work 🚀
        </motion.a>
      </motion.div>
    </section>
    </div>
    
    </>
  );
}
