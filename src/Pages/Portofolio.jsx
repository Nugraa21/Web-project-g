import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Anime Quiz App",
    description: "A fun, interactive quiz application themed around popular anime series, built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400?text=Anime+Quiz+App",
    link: "#",
    tools: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Portfolio Website",
    description: "A vibrant personal portfolio showcasing my projects, built with React, Framer Motion, and Tailwind CSS.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    link: "#",
    tools: ["React", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Platform",
    description: "A responsive e-commerce site with anime merchandise, featuring dynamic filtering and cart functionality.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    link: "#",
  },
];

const Portofolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-20 bg-transparent overflow-x-hidden"
      id="Portofolio"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-400 mb-12 text-center tracking-tight drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group bg-yellow-50 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg border-l-4 border-yellow-400 overflow-hidden hover:shadow-xl cursor-pointer relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute w-16 h-16 bg-pink-100 rounded-full -top-6 -left-6 opacity-30 blur-xl"></div>
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-extrabold text-yellow-400 mb-2 tracking-wide">{project.title}</h3>
              <p className="text-gray-800 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              <motion.span
                className="inline-block mt-4 px-5 py-1 text-sm bg-yellow-300 text-yellow-800 rounded-full font-semibold"
                whileHover={{ backgroundColor: "#ec4899", color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                View Details
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-8 py-3 bg-yellow-400 text-yellow-800 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </motion.div>

      {/* Detail Card Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-yellow-50 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl border-l-4 border-yellow-400 max-w-4xl w-full overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute w-16 h-16 bg-pink-100 rounded-full -top-6 -left-6 opacity-30 blur-xl"></div>
              <div className="relative flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-1/2 w-full h-64 sm:h-96 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="sm:w-1/2 w-full p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mb-4 tracking-tight drop-shadow-md">{selectedProject.title}</h3>
                    <p className="text-gray-800 text-base sm:text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                    {selectedProject.tools && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-yellow-400 mb-2">Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map((tool, index) => (
                            <motion.span
                              key={index}
                              className="px-3 py-1 text-xs bg-pink-300 text-yellow-800 rounded-full font-semibold"
                              whileHover={{ scale: 1.1, backgroundColor: "#ec4899", color: "#ffffff" }}
                              transition={{ duration: 0.2 }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Project Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base leading-relaxed">
                        <li>Designed with a focus on user engagement and accessibility</li>
                        <li>Optimized for performance across devices</li>
                        <li>Integrated modern frameworks for scalability</li>
                      </ul>
                    </div>
                  </div>
                  <motion.a
                    href={selectedProject.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-yellow-800 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Project <FaExternalLinkAlt />
                  </motion.a>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-sm px-4 py-2 bg-pink-300 text-yellow-800 font-semibold rounded-full hover:bg-yellow-400 hover:text-pink-800 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaArrowLeft className="inline mr-1" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default memo(Portofolio);