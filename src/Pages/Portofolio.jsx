import React, { useEffect, memo, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anime Quiz App",
    description: "A fun, interactive quiz application themed around popular anime series, built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400?text=Anime+Quiz+App",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A vibrant personal portfolio showcasing my projects, built with React, Framer Motion, and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A responsive e-commerce site with anime merchandise, featuring dynamic filtering and cart functionality.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    link: "#",
  },
];

const Portofolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("Portofolio");
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
      id="Portofolio"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          My Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: "easeOut" }}
            >
              <div
                className="w-full h-48 bg-gray-200"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Portofolio);