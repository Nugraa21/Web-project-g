import React, { useEffect, memo, useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const { top } = section.getBoundingClientRect();
        setIsVisible(top >= -window.innerHeight / 2 && top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-x-hidden relative"
      id="contact"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-800 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Ready to start an epic project together? Reach out via email or connect with me on social media!
        </motion.p>
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl border-2 border-pink-400 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold text-pink-600">Email:</span>{" "}
              <a href="mailto:ludang@example.com" className="text-yellow-500 hover:underline">
                ludang@example.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-pink-600">GitHub:</span>{" "}
              <a href="https://github.com/ludang" className="text-yellow-500 hover:underline">
                github.com/ludang
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-pink-600">LinkedIn:</span>{" "}
              <a href="https://linkedin.com/in/ludang" className="text-yellow-500 hover:underline">
                linkedin.com/in/ludang
              </a>
            </p>
          </div>
          <a
            href="mailto:ludang@example.com"
            className="mt-6 inline-block px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(ContactPage);