import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Github, Linkedin, Download } from "lucide-react";

 function Hero() {
  return (
    <div
      className="
        flex flex-col items-center justify-center text-center mt-48 mb-20
        bg-white text-black
        dark:bg-[#0A0A0A] dark:text-white
        transition-colors duration-300
      "
    >
      <h1 className="text-6xl font-sans">
        <AnimatedShinyText>Hello I’m</AnimatedShinyText>{" "}
        <AuroraText>Ahmed Zahid</AuroraText>
      </h1>

      <br />

      <div className="text-center">
        <p className="text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto px-4">
          <TextAnimate animation="blurInUp" by="character" once>
            I’m a passionate Frontend Developer crafting creative digital experiences
          </TextAnimate>

          <TextAnimate animation="blurInUp" by="character" once delay={0.5}>
            I turn ideas into smooth, responsive, and modern web designs
          </TextAnimate>

          <TextAnimate animation="blurInUp" by="character" once delay={1}>
            Exploring the future of AI and smart automation
          </TextAnimate>

          <TextAnimate animation="blurInUp" by="character" once delay={1.5}>
            Let’s create something meaningful together...
          </TextAnimate>
        </p>
      </div>

      <br />

      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 mb-20">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:scale-105"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:scale-105"
        >
          <Download size={18} />
          Download CV
        </a>

        <a
          href="https://github.com/ahmed22138"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          <Github size={18} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/ahmed-zahid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Hero;
