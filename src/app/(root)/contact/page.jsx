"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-[90%] py-32 text-center xl:text-left flex items-center justify-center min-h-screen">
        {/* text & form container */}
        <div className="flex flex-col w-full max-w-[700px] bg-gray-300 dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          {/* heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12"
          >
             Let&apos;s
            <span className="text-primary-500">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white text-primary-500 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                bg-white text-primary-500 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <input
              type="text"
              placeholder="Subject" // Fixed 'tobic' typo to 'Subject'
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white text-primary-500 placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />

            <textarea
              placeholder="Your message"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white text-primary-500 placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 
              h-40 resize-y"
            ></textarea>

            {/* button */}
            <button
              aria-label="Send message"
              className="relative w-fit mx-auto sm:mx-0 px-8 py-3 rounded-full bg-primary-500 
              text-white font-medium transition-all duration-300 flex items-center justify-center 
              overflow-hidden group shadow-md hover:shadow-lg"
            >
              <span
                className="relative z-10 group-hover:-translate-y-[120%] group-hover:opacity-0 
                transition-all duration-300"
              >
                Send Message
              </span>
              <BsArrowRight
                className="absolute z-10 -translate-y-[120%] opacity-0 
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 
                text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Page;
