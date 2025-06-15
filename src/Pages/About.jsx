import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaFigma, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import { MdPsychology, MdDesignServices } from "react-icons/md";

const skills = [
  {
    icon: <FaFigma className="text-pink-500 text-4xl" />,
    title: "UI/UX Design",
    description: "Mendesain antarmuka aplikasi yang estetis, ramah pengguna, dan fungsional menggunakan Figma, Adobe XD, dan tools lainnya.",
  },
  {
    icon: <FaLaptopCode className="text-yellow-500 text-4xl" />,
    title: "Web Design",
    description: "Membuat prototipe dan mockup web dengan pendekatan responsif dan berorientasi pengalaman pengguna.",
  },
  {
    icon: <MdPsychology className="text-purple-500 text-4xl" />,
    title: "User Research",
    description: "Mengamati, memahami, dan merancang solusi berdasarkan kebutuhan serta perilaku pengguna.",
  },
  {
    icon: <FaUserFriends className="text-green-500 text-4xl" />,
    title: "Team Collaboration",
    description: "Berpengalaman bekerja dalam tim lintas disiplin untuk menciptakan produk digital yang efektif dan inklusif.",
  },
  {
    icon: <MdDesignServices className="text-blue-500 text-4xl" />,
    title: "Design Thinking",
    description: "Menggunakan pendekatan kreatif untuk memecahkan masalah secara iteratif melalui tahapan empathy hingga prototyping.",
  },
];

const AboutPage = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-x-hidden relative "
      id="About"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Photo Card */}
        <motion.div
          className="relative group w-full lg:w-1/2 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full h-96 bg-white rounded-2xl shadow-xl border-4 border-pink-400 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
            <div
              className="w-full h-full bg-gray-200 flex items-center justify-center"
              style={{
                backgroundImage: "url('./gema.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white text-center w-full pb-4 font-semibold text-sm">
                “Siti Mustagimah”
              </p>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-6 leading-relaxed">
            I'm <span className="text-pink-600 font-semibold">Siti Mustagimah</span>, a passionate student of Digital Business with a love for <span className="font-semibold text-yellow-500">UI/UX design</span>. My focus is creating experiences that are both useful and delightful — bridging the gap between technology and human behavior.
          </p>
          <p className="text-lg sm:text-xl text-gray-800 mb-6 leading-relaxed">
            I thrive on understanding user needs and turning insights into wireframes, mockups, and real-world solutions. I believe good design is not just about beauty — it’s about <span className="text-pink-600 font-semibold">empathy, clarity, and impact</span>.
          </p>
          <p className="text-lg sm:text-xl text-gray-800 mb-6 leading-relaxed">
            Currently, I’m looking for an internship to sharpen my skills through hands-on collaboration, usability testing, and impactful projects.
          </p>
          <a
            href="/path/to/siti-mustagimah-cv.pdf"
            download
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 mb-8"
          >
            📄 Download CV
          </a>
        </motion.div>
      </div>

      {/* Skills and Interests */}
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-400 hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
          >
            <div className="absolute w-16 h-16 bg-yellow-100 rounded-full -top-6 -left-6 opacity-30 blur-xl"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-100 p-3 rounded-xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-pink-600">{skill.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default memo(AboutPage);
