import BlurNavbar from '@/components/navbar/nav1';
import React from 'react'
import { FaGithub } from "react-icons/fa";

function ContentBlog() {
  return (
    <>
    <BlurNavbar/>
    <div className='bg-[#0A0A0A] mt-20'>
      <div className="p-4">
  <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
    <h2 className="text-3xl font-bold text-white mb-8">
      Latest Blog Posts
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8 ">
      <div className="bg-black rounded-md overflow-hidden">
        <div className="bg-black aspect-[23/16]">
          <img
            src="/8s.png"
            alt="Blog Post 1"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Physical AI Books
          </h3>
          <p className="text-white text-[15px] leading-relaxed line-clamp-3">
              An innovative platform that leverages AI to recommend and deliver
                physical books tailored to your interests and reading habits.
          </p>
          <a href='https://github.com/ahmed22138/physical-ai-books'><FaGithub className='mt-3 text-2xl'/></a>
          <a
            href="https://physical-ai-books.vercel.app/"
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
            View Project !
          </a>
        </div>
      </div>
      <div className="bg-black rounded-md overflow-hidden">
        <div className="bg-gray-50 aspect-[23/16]">
          <img
            src="/9s.png"
            alt="Blog Post 2"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
              full Stack Todo App!!
          </h3>
          <p className="text-white text-[15px] leading-relaxed line-clamp-3">
           A comprehensive full-stack todo application built with modern web
            technologies to help you manage your tasks efficiently.
          </p>
          <a href='https://github.com/ahmed22138/Full-stack-Todo-app'><FaGithub className='mt-3 text-2xl'/></a>
          <a
            href="https://full-stack-todo-app-liard.vercel.app/login"
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
             View Project !
          </a>
        </div>
      </div>
      <div className="bg-black rounded-md overflow-hidden">
        <div className="bg-gray-50 aspect-[23/16]">
          <img
            src="/10s.png"
            alt="Blog Post 3"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            todo App with AI Chatbot
          </h3>
          <p className="text-white text-[15px] leading-relaxed line-clamp-3">
              An advanced todo application integrated with an AI-powered chatbot to
                assist users in managing tasks through natural language interactions.
          </p>
           <a href='https://github.com/ahmed22138/Todo-Ai-Chatbot'><FaGithub className='mt-3 text-2xl'/></a>
          <a
            href="https://todo-ai-chatbot-omega.vercel.app/"
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
             View Project !
          </a>
        </div>
      </div>
      <div className="bg-black rounded-md overflow-hidden">
        <div className="bg-gray-50 aspect-[23/16]">
          <img
            src="/1 (4).png"
            alt="Blog Post 3"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            figma Project
          </h3>
          <p className="text-white text-[15px] leading-relaxed line-clamp-3">
           A collaborative design platform that enables teams to create,
            prototype, and share user interface designs seamlessly.
          </p>
         <a href='https://github.com/ahmed22138/figma-project'><FaGithub className='mt-3 text-2xl'/></a>

          <a
            href="https://figma-project-opal.vercel.app/"
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
             View Project !
          </a>
        </div>
      </div>
      <div className="bg-black rounded-md overflow-hidden">
        <div className="bg-gray-50 aspect-[23/16]">
          <img
            src="/1 (1).png"
            alt="Blog Post 3"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            build Resume Builder
          </h3>
          <p className="text-white text-[15px] leading-relaxed line-clamp-3">
            A user-friendly web application that helps individuals create
            professional resumes with customizable templates and easy-to-use tools.
          </p>
          <a href='https://github.com/ahmed22138/resume-builder'><FaGithub className='mt-3 text-2xl'/></a>

          <a
            href="https://resume-builder-eta-green.vercel.app/"
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
             View Project !
          </a>
        </div>
      </div>
      {/* <div className="bg-black rounded-md overflow-hidden">
        <div className="bg-gray-50 aspect-[23/16]">
          <img
            src="https://readymadeui.com/Imagination.webp"
            alt="Blog Post 3"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            The Power of Creativity
          </h3>
          <p className="text-white text-[15px] leading-relaxed line-clamp-3">
            Uncover how creative thinking fuels innovation and helps brands stay
            competitive in any market.
          </p>
          <a
            href="javascript:void(0);"
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
            Read More
          </a>
        </div> */}
      </div>
    </div>
  </div>
</div>
</>
    
  )
}

export default ContentBlog
