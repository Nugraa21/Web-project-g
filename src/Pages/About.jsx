import React, { memo } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-x-hidden relative"
      id="About"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Photo Card */}
        <motion.div
          className="relative group w-full lg:w-1/2 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full h-96 bg-white rounded-2xl shadow-xl border-4 border-pink-400 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
            <div
              className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium"
              style={{
                backgroundImage: "url('./gema.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white text-center w-full pb-4 font-semibold text-sm">
                " Siti Mustagimah. "
              </p>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-6">
            I am<span className="text-pink-600"> Siti Mustagimah, a</span>  Digital Business student with a strong passion for UI/UX design.
I am driven to create user-centered digital experiences that are both functional and visually appealing. With a solid understanding of user behavior, wireframing, and design thinking, I continue to enhance my skills in building intuitive interfaces.
          </p>
          <p className="text-lg sm:text-xl text-gray-800 mb-6">
           Currently, I am seeking internship opportunities to gain hands-on experience in UI/UX design, usability testing, and developing responsive interfaces that solve real user problems.
          </p>
          <a
            href="/path/to/your-cv.pdf" // Replace with your actual CV file path
            download
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 mb-8"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Skills and Interests */}
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-pink-400">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Skills</h3>
          <ul className="text-gray-700 list-disc list-inside">
            <li>React & JavaScript (ES6+)</li>
            <li>Tailwind CSS & Styled Components</li>
            <li>Framer Motion & Animations</li>
            <li>Responsive & Accessible Design</li>
            <li>REST APIs & GraphQL</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-yellow-400">
          <h3 className="text-xl font-semibold text-yellow-500 mb-2">Interests</h3>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Anime & Manga Culture</li>
            <li>Game Development (Unity, Phaser)</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Open-Source Contributions</li>
            <li>Tech Community Engagement</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default memo(AboutPage);