import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaUser, FaCommentDots } from "react-icons/fa";

const ContactPage = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-x-hidden bg-transparent"
      id="contact"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Contact Form - LEFT */}
        <motion.div
          className="w-full lg:w-1/2 bg-pink-50 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg border-l-4 border-pink-400 p-8 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute w-16 h-16 bg-yellow-100 rounded-full -top-6 -left-6 opacity-30 blur-xl"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-500 mb-6 tracking-tight drop-shadow-md">
            Send a Message
          </h2>
          <form className="space-y-5">
            <motion.div
              className="flex items-center border border-pink-300 rounded-lg px-4 py-3 bg-pink-100 bg-opacity-50 focus-within:ring-2 focus-within:ring-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <FaUser className="text-pink-400 mr-3 text-2xl" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-gray-800 placeholder:text-pink-300 text-lg"
              />
            </motion.div>
            <motion.div
              className="flex items-center border border-pink-300 rounded-lg px-4 py-3 bg-pink-100 bg-opacity-50 focus-within:ring-2 focus-within:ring-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <FaEnvelope className="text-pink-400 mr-3 text-2xl" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none text-gray-800 placeholder:text-pink-300 text-lg"
              />
            </motion.div>
            <motion.div
              className="flex items-start border border-pink-300 rounded-lg px-4 py-3 bg-pink-100 bg-opacity-50 focus-within:ring-2 focus-within:ring-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <FaCommentDots className="text-pink-400 mt-1 mr-3 text-2xl" />
              <textarea
                placeholder="Your Message"
                className="w-full bg-transparent outline-none text-gray-800 placeholder:text-pink-300 text-lg resize-none h-32"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-400 hover:text-pink-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info - RIGHT */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pink-500 mb-6 tracking-tight drop-shadow-md">
            Contact Info
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-6 leading-relaxed">
            I’m <span className="text-pink-600 font-semibold">Ludang Prasetyo Nugroho</span>, a Computer Engineering student at UTDI Yogyakarta. Let's connect and build something awesome together!
          </p>
          <ul className="space-y-4 text-lg sm:text-xl text-gray-800 mb-6">
            <li className="flex items-center gap-3">
              <FaUser className="text-pink-400 text-2xl" />
              Ludang Prasetyo Nugroho
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-pink-400 text-2xl" />
              ludang.prasetyo@students.utdi.ac.id
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400 text-2xl">📍</span>
              Sleman, Yogyakarta
            </li>
          </ul>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">Follow Me</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/ludang"
                className="text-pink-500"
                whileHover={{ scale: 1.2, color: "#facc15" }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ludang"
                className="text-pink-500"
                whileHover={{ scale: 1.2, color: "#facc15" }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(ContactPage);