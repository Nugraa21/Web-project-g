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
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 pb-24 bg-transparent overflow-hidden"
      id="Portofolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-500 mb-10 text-center drop-shadow-md tracking-tight">
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group bg-pink-50 bg-opacity-80 rounded-2xl shadow-lg border-2 border-pink-300 overflow-hidden hover:shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-pink-500 mb-2 tracking-wide">{project.title}</h3>
              <p className="text-gray-800 text-sm line-clamp-2">{project.description}</p>
              <motion.span
                className="inline-block mt-4 px-4 py-1 text-sm bg-pink-300 text-pink-800 rounded-full"
                whileHover={{ backgroundColor: "#facc15", color: "#1f2937" }}
                transition={{ duration: 0.3 }}
              >
                View Details
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 bg-yellow-400 text-pink-800 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Detail Card Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-pink-50 bg-opacity-90 rounded-2xl shadow-2xl border-2 border-pink-300 max-w-3xl w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-1/2 w-full h-64 sm:h-80 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="sm:w-1/2 w-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-pink-500 mb-3 tracking-tight">{selectedProject.title}</h3>
                    <p className="text-gray-800 text-base mb-4 leading-relaxed">{selectedProject.description}</p>
                    {selectedProject.tools && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-pink-500 mb-2">Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map((tool, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs bg-yellow-400 text-pink-800 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <motion.a
                    href={selectedProject.link}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-pink-800 transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    Visit Project <FaExternalLinkAlt />
                  </motion.a>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-sm px-3 py-1 bg-yellow-400 text-pink-800 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  <FaArrowLeft className="inline mr-1" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default memo(Portofolio);