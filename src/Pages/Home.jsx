import React, { memo } from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-x-hidden relative"
      id="Home"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 leading-tight tracking-wide">
            Yo, I’m Gema!
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-6 font-medium max-w-lg">
            Turning <span className="text-yellow-400">ideas </span> into functional and elegant digital design.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Let’s Team Up!
          </a>
        </motion.div>

        {/* Photo Card */}
        <motion.div
          className="relative group w-full lg:w-1/2 max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-full h-96 bg-white rounded-2xl shadow-xl border-4 border-yellow-400 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
            <div
              className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium"
              style={{
                backgroundImage: "url('./gema.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white text-center w-full pb-4 font-semibold text-sm">
                  " Siti Mustagimah. "
              </p>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(Home);