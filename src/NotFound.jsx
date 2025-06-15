import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-white via-pink-50 to-yellow-50 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-6xl sm:text-8xl font-bold text-pink-600 mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        404
      </motion.h1>
      <p className="text-xl sm:text-2xl text-gray-800 mb-8">
        Oops! This page got lost in the anime multiverse!
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
      >
        Back to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;