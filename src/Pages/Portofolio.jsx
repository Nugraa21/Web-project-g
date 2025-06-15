import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

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
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 pb-24 bg-gradient-to-b from-pink-50 to-white overflow-hidden"
      id="Portofolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-10 text-center drop-shadow-md tracking-tight">
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group bg-white rounded-3xl shadow-lg border-4 border-pink-200 overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <div
              className="h-48 bg-gray-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-pink-600 mb-2 tracking-wide">{project.title}</h3>
              <p className="text-gray-700 text-sm line-clamp-2">{project.description}</p>
              <motion.span
                className="inline-block mt-4 px-4 py-1 text-sm bg-pink-200 text-pink-800 rounded-full"
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
          className="px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Detail Card Fullscreen */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-pink-50 bg-opacity-95 backdrop-blur-md flex items-center justify-center px-4 sm:px-12 py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-pink-300 flex flex-col lg:flex-row max-w-5xl w-full overflow-hidden">
              {/* Image */}
              <div className="lg:w-1/2 w-full h-64 lg:h-auto relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-pink-600 mb-4 tracking-tight">{selectedProject.title}</h3>
                <p className="text-gray-800 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                <motion.a
                  href={selectedProject.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 w-fit"
                  whileHover={{ scale: 1.05 }}
                >
                  Visit Project <FaExternalLinkAlt />
                </motion.a>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-sm sm:text-base px-4 py-2 bg-yellow-300 text-gray-800 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <FaArrowLeft className="inline mr-1" />
                Back
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default memo(Portofolio);