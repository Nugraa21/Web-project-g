import React, { memo, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anime Quiz App",
    description: "A fun anime-themed quiz app built with React and Tailwind CSS, offering engaging quizzes for anime fans.",
    image: "https://via.placeholder.com/1280x720?text=Anime+Quiz+App",
    link: "#",
    tools: ["React", "Tailwind CSS", "Vite"],
    features: ["Interactive quizzes", "Real-time scoring", "Anime-themed UI"],
  },
  {
    title: "Portfolio Website",
    description: "A vibrant portfolio showcasing my projects with React and Framer Motion, designed for a smooth user experience.",
    image: "https://via.placeholder.com/1280x720?text=Portfolio+Website",
    link: "#",
    tools: ["React", "Framer Motion", "Tailwind CSS"],
    features: ["Dynamic animations", "Responsive design", "Project showcase"],
  },
  {
    title: "E-Commerce Platform",
    description: "A responsive anime merchandise store with dynamic filtering, built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/1280x720?text=E-Commerce+Platform",
    link: "#",
    tools: ["React", "Tailwind CSS"],
    features: ["Product filtering", "Cart system", "Mobile-friendly"],
  },
  {
    title: "Chat Application",
    description: "A real-time chat app built with React and WebSocket, featuring user authentication.",
    image: "https://via.placeholder.com/1280x720?text=Chat+Application",
    link: "#",
    tools: ["React", "WebSocket", "Tailwind CSS"],
    features: ["Real-time messaging", "User authentication", "Custom emojis"],
  },
  {
    title: "Task Manager",
    description: "A task management tool built with React, offering drag-and-drop functionality.",
    image: "https://via.placeholder.com/1280x720?text=Task+Manager",
    link: "#",
    tools: ["React", "Tailwind CSS", "Drag-and-Drop"],
    features: ["Task prioritization", "Drag-and-drop", "Progress tracking"],
  },
];

const Portofolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const detailVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-20 "
      id="Portofolio"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pink-600 mb-10 text-center tracking-tight drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.03, rotate: 0.5, boxShadow: "0 10px 20px rgba(244, 114, 182, 0.2)" }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-xl font-bold text-pink-600 mb-3 tracking-wide">{project.title}</h3>
              <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              <motion.button
                className="mt-5 px-6 py-2 bg-pink-100 text-pink-600 rounded-full font-semibold hover:bg-pink-200 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More/Show Less Button */}
      {projects.length > 3 && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-all duration-200 hover:shadow-lg"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      )}

      {/* Project Detail View */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-pink-100 to-rose-100 flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-pink-300 p-6 sm:p-8 my-10 sm:my-12 relative"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 left-4 bg-pink-500 text-white rounded-full p-3 hover:bg-pink-600 transition-colors duration-200 z-10"
              onClick={() => setSelectedProject(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-pink-600 tracking-wide drop-shadow-md">{selectedProject.title}</h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">Click outside to return</p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="w-full">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-pink-200 to-rose-200 border-2 border-pink-300">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover p-2 sm:p-3 rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full space-y-6">
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{selectedProject.description}</p>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-pink-100 text-pink-600 rounded-full text-xs sm:text-sm font-medium hover:bg-pink-200 transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3">Awesome Features</h3>
                  <ul className="list-disc list-inside text-gray-800 text-xs sm:text-sm space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-pink-500">✨</span> {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={selectedProject.link}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-all duration-200 hover:shadow-lg"
              >
                View Project
              </a>
              <a
                href="#"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-100 text-pink-600 rounded-full font-semibold hover:bg-pink-200 transition-all duration-200 hover:shadow-lg"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default memo(Portofolio);