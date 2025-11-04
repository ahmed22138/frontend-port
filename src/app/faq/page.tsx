"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurNavbar from "@/components/navbar/nav1";
import Footer from "@/components/footer/footer";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I deploy my app to production?",
    answer:
      "Use platforms like Vercel or Netlify and run production build (`npm run build`)."
  },
  {
    question: "Can I use a custom domain with my project?",
    answer:
      "Yes, you can connect your own domain easily from DNS settings on hosting platforms."
  },
  {
    question: "How do I manage API keys securely?",
    answer:
      "Never expose keys on frontend. Use environment variables and server-side APIs."
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes, we provide documentation, community help, and priority support for Pro users."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) =>
    setActive(active === i ? null : i);

  return (
    <>
    <BlurNavbar/>
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-[#0A0A0A] transition-colors mt-36">
      <motion.div initial={{ opacity: 0, scale: 0.88,  y:40 }}
        whileInView={{ opacity: 1, scale: 1, y:0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once:false,  amount: 0.3 }} className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm">
          Quick answers for your common questions.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow p-5"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full justify-between items-center text-left text-black dark:text-white font-medium"
              >
                {item.question}
                <ChevronDown
                  className={`transform transition duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    
    </>
  );
}
