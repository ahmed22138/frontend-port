"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  { src: "/1 (1).png", alt: "Slide 1", title: "Project 1 Resume Builder" },
  { src: "/1 (3).png", alt: "Slide 2", title: "Project 2 E-commerce website" },
  { src: "/1 (4).png", alt: "Slide 3", title: "Project 3 builder construction website" },
  { src: "/1 (2).png", alt: "Slide 4", title: "Project 4 mini-protfolio website" },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Optional: autoplay
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }
  function goTo(i: number) {
    setIndex(i);
  }

  return (
     <section className="py-10 mt-20">

        <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center text-3xl md:text-4xl font-serif font-semibold mb-10"
      >
        <span className="text-black dark:text-white">
            My Projects
        </span>
      </motion.h1>

      {/* ANIMATED CAROUSEL WRAPPER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88,  y:40 }}
        whileInView={{ opacity: 1, scale: 1, y:0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once:false,  amount: 0.3 }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Slider window */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-4 text-center bg-white/60 dark:bg-black/40">
                  <h3 className="text-lg font-semibold">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition"
        >
          <span className="text-2xl font-bold text-indigo-600">‹</span>
        </button>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition"
        >
          <span className="text-2xl font-bold text-indigo-600">›</span>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-indigo-600" : "bg-gray-300"
              } transition`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
