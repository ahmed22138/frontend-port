"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    src: "/1 (1).png",
    alt: "Resume Builder",
    title: "Resume Builder",
    description: "A web app that lets users create professional resumes with live preview and PDF export.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ahmed22138",
    live: "https://resume-builder-eta-green.vercel.app/",
  },
  {
    src: "/1 (3).png",
    alt: "E-commerce Website",
    title: "E-commerce Website",
    description: "A fully responsive online store with product listings, cart, and checkout flow.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    github: "https://github.com/ahmed22138",
    live: "https://hackathon-3-sandy-ten.vercel.app",
  },
  {
    src: "/1 (4).png",
    alt: "Construction Website",
    title: "Construction Company Website",
    description: "A professional landing page for a construction business with service showcase and contact form.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ahmed22138",
    live: "https://figma-project-opal.vercel.app/",
  },
  {
    src: "/1 (2).png",
    alt: "Mini Portfolio",
    title: "Mini Portfolio Website",
    description: "A clean, minimal personal portfolio with dark mode and animated sections.",
    tech: ["React", "Tailwind CSS", "GSAP"],
    github: "https://github.com/ahmed22138",
    live: "https://hackathon-3-sandy-ten.vercel.app",
  },
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="py-10 mt-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center text-3xl md:text-4xl font-serif font-semibold mb-12 text-black dark:text-white"
      >
        My Projects
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-neutral-800"
          >
            <div className="overflow-hidden">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
