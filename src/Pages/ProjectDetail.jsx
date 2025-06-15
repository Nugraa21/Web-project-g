import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../public/porto.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-white via-pink-50 to-yellow-50 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-pink-600">Project Not Found</h1>
        <button
          onClick={() => navigate("/#Portofolio")}
          className="mt-6 px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300"
        >
          Back to Portfolio
        </button>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-x-hidden bg-gradient-to-br from-white via-pink-50 to-yellow-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl">
        <motion.button
          onClick={() => navigate("/#Portofolio")}
          className="mb-8 px-6 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Back to Portfolio
        </motion.button>
        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl shadow-xl border-4 border-yellow-400 overflow-hidden">
              <div
                className="w-full h-96 bg-gray-200"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-4">{project.title}</h1>
            <p className="text-lg sm:text-xl text-gray-800 mb-6">{project.details.overview}</p>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">Technologies</h2>
            <ul className="text-gray-700 mb-6 flex flex-wrap gap-2">
              {project.details.technologies.map((tech, index) => (
                <li key={index} className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full">
                  {tech}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">Features</h2>
            <ul className="text-gray-700 list-disc list-inside mb-6">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href={project.details.github}
                className="px-6 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                View GitHub
              </a>
              <a
                href={project.details.demo}
                className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;