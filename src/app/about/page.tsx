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
  Hi 👋, I'm <span className="font-semibold text-indigo-500">Ahmed Zahid</span>. 
  I’m a passionate <span className="text-purple-500 font-medium">Frontend Developer</span> who loves crafting 
  visually appealing and high-performance digital experiences. I specialize in
  <span className="text-indigo-500 font-medium"> Next.js</span>, 
  <span className="text-purple-500 font-medium"> TypeScript</span>, 
  and <span className="text-indigo-500 font-medium">Tailwind CSS</span>
  to build modern, responsive user interfaces with smooth animations.
</p>

<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
  I also work with <span className="text-purple-500 font-medium">Sanity CMS</span>, 
  <span className="text-indigo-500 font-medium">Python</span>, 
  and the <span className="text-purple-500 font-medium">OpenAI Agent SDK</span> 
  to integrate smart AI-powered features such as chatbots and automation tools. 
  My focus is clean code, great performance, and seamless user interaction.
  I keep learning everyday and love turning creative ideas into powerful products 🚀✨
</p>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          My goal is to create smooth user experiences with elegant UI animations,
          efficient code, and clean design. I'm always exploring new technologies and pushing my limits
          to bring innovative ideas to life.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          View My Work 🚀
        </motion.button>
      </motion.div>
    </section>
    </div>
    
    </>
  );
}
