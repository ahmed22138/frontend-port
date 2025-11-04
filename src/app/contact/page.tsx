"use client";

import BlurNavbar from "@/components/navbar/nav1";
import { motion } from "framer-motion";
import { FaFacebook,FaTwitter,FaLinkedin,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Contact() {
  return (
    <>
    <BlurNavbar/>

    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
        
      <div className="grid lg:grid-cols-2 items-start gap-16 p-6 mx-auto max-w-5xl max-lg:max-w-2xl bg-white dark:bg-[#0A0A0A] mt-52">
       
        <div>
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold">
           Contact us
          </h2>
          <p className="text-[15px] text-slate-600 dark:text-gray-300 mt-4 leading-relaxed">
            Have some big idea or brand to develop and need help? Then reach out we'd
            love to hear about your project and provide help.
          </p>

          {/* Email */}
          <div className="mt-12">
            <h2 className="text-slate-900 dark:text-white text-base font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] dark:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  {/* Mail icon same rakhna */}
                  <MdEmail />
                </div>
                <a href="https://mail.google.com/mail/u/1/#inbox" className="text-sm ml-4">
                  <small className="block text-slate-900 dark:text-gray-200">Mail</small>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    ahmedzahid1149@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="mt-12">
            <h2 className="text-slate-900 dark:text-white text-base font-semibold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              {/* Icons same rakhna */}
              <FaFacebook/>
              <FaLinkedin/>
              <FaTwitter/>

            </ul>
          </div>
        </div>

        {/* Form */}
        <form className="lg:ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white text-sm border border-gray-200 dark:border-gray-600 focus:border-slate-900 dark:focus:border-gray-200 outline-none focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white text-sm border border-gray-200 dark:border-gray-600 focus:border-slate-900 dark:focus:border-gray-200 outline-none focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white text-sm border border-gray-200 dark:border-gray-600 focus:border-slate-900 dark:focus:border-gray-200 outline-none focus:bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white text-sm pt-3 border border-gray-200 dark:border-gray-600 focus:border-slate-900 dark:focus:border-gray-200 outline-none focus:bg-transparent"
          />
          <button
            type="button"
            className="text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black tracking-wide rounded-md text-sm font-medium px-4 py-3 w-full cursor-pointer !mt-2 border-0"
          >
            Send message
          </button>
        </form>
      </div>
    </motion.div>
    
    </>
  );
}
