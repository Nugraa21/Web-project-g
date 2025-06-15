import React, { memo } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-transparent backdrop-blur-xl"
      id="Home"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#f472b6", "#facc15"] },
            links: { enable: true, color: "#f472b6", distance: 120 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Photo Card */}
        <motion.div
          className="relative group w-full lg:w-1/2 max-w-md order-first lg:order-last"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-96 bg-white rounded-2xl shadow-xl border-4 border-pink-300 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500 hover:rotate-1 backdrop-blur-lg">
            <div
              className="w-full h-full bg-gray-200 flex items-center justify-center"
              style={{
                backgroundImage: "url('./gema.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <p className="text-white text-center w-full pb-4 font-semibold text-sm">
                "Siti Mustagimah"
              </p>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first bg-white/20 p-6 rounded-xl  backdrop-blur-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pink-600 leading-tight tracking-wide glow-text mb-2">
            Hi, I’m Siti Mustagimah!
          </h1>

          {/* Typing Sub Text */}
          <div className="h-8 sm:h-10 mb-6">
            <TypeAnimation
              sequence={[
                "UI/UX Designer",
                2000,
                "Front-End Developer",
                2000,
                "Creative Thinker 💡",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-yellow-500 text-lg sm:text-xl font-semibold"
            />
          </div>

          <p className="text-base sm:text-lg text-gray-800 mb-6 font-medium max-w-lg z-10">
            I design <span className="text-yellow-400 font-semibold">intuitive</span> and <span className="text-pink-500 font-semibold">engaging</span> digital experiences that users love.
          </p>

          <a
            href="#contact"
            className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 z-10"
          >
            Let’s Collaborate!
          </a>
        </motion.div>
      </div>

      {/* Glow effect */}
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(236, 72, 153, 0.7), 0 0 20px rgba(236, 72, 153, 0.5);
        }
      `}</style>
    </motion.section>
  );
};

export default memo(Home);
