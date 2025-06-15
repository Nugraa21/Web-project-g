import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaFigma, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import { MdPsychology, MdDesignServices } from "react-icons/md";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiAdobe, SiAdobexd } from "react-icons/si";

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

const tools = [
  {
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    name: "JavaScript",
    description: "Bahasa pemrograman untuk membangun interaksi dinamis pada web, mendukung pengembangan frontend dan backend.",
  },
  {
    icon: <SiReact className="text-cyan-500 text-4xl" />,
    name: "React",
    description: "Library JavaScript untuk membangun antarmuka pengguna yang responsif dan komponen yang reusable.",
  },
  {
    icon: <SiHtml5 className="text-orange-500 text-4xl" />,
    name: "HTML5",
    description: "Struktur dasar untuk membangun halaman web yang modern dan semantik.",
  },
  {
    icon: <SiCss3 className="text-blue-500 text-4xl" />,
    name: "CSS3",
    description: "Mengatur gaya dan tata letak web untuk pengalaman visual yang menarik.",
  },
  {
    icon: <SiTailwindcss className="text-teal-500 text-4xl" />,
    name: "Tailwind CSS",
    description: "Framework CSS untuk desain responsif yang cepat dan fleksibel.",
  },
  {
    icon: <FaFigma className="text-pink-500 text-4xl" />,
    name: "Figma",
    description: "Alat desain kolaboratif untuk membuat wireframe, prototype, dan desain UI/UX.",
  },
  {
    icon: <SiAdobexd className="text-purple-500 text-4xl" />,
    name: "Adobe XD",
    description: "Software untuk desain dan prototyping antarmuka pengguna dengan alur kerja yang efisien.",
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
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Photo Card */}
        <motion.div
          className="relative group w-full lg:w-1/2 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-out"
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
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-out"
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
            href="./CV/CV Siti Mustagimah Cybersecurity.pdf"
            download
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 mb-8"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Skills and Interests */}
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        data-aos-easing="ease-out"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-6 border-2 border-pink-300 overflow-hidden group hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.07, boxShadow: "0 10px 20px rgba(244, 114, 182, 0.3)" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={900 + index * 200}
            data-aos-easing="ease-out"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute w-32 h-32 bg-pink-400 rounded-full -top-16 -right-16 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute w-24 h-24 bg-yellow-400 rounded-full -bottom-12 -left-12 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <motion.div
              className="relative flex items-center gap-4 mb-4"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-pink-200 p-4 rounded-full shadow-lg group-hover:bg-pink-300 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.4 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-pink-600 group-hover:text-pink-700 transition-colors duration-300 drop-shadow-sm">
                {skill.title}
              </h3>
            </motion.div>
            <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              {skill.description}
            </p>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Programming Languages and Tools */}
      <motion.div
        className="w-full max-w-7xl mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-easing="ease-out"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-10 text-center tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="1100"
          data-aos-easing="ease-out"
        >
          Tools & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-lg p-5 border-2 border-yellow-300 overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.07, boxShadow: "0 10px 20px rgba(255, 196, 0, 0.3)" }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={1200 + index * 150}
              data-aos-easing="ease-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute w-24 h-24 bg-yellow-400 rounded-full -top-12 -right-12 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute w-20 h-20 bg-pink-400 rounded-full -bottom-10 -left-10 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <motion.div
                className="relative flex items-center gap-3 mb-4"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="bg-yellow-200 p-3 rounded-full shadow-lg group-hover:bg-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  transition={{ duration: 0.4 }}
                >
                  {tool.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300 drop-shadow-sm">
                  {tool.name}
                </h3>
              </motion.div>
              <p className="text-gray-700 text-xs leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {tool.description}
              </p>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default memo(AboutPage);