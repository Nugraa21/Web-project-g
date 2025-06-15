import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AnimatedBackground from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Portofolio from "./Pages/Portofolio.jsx";
import ContactPage from "./Pages/Contact.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen.jsx";
import { AnimatePresence } from 'framer-motion';
import NotFound from "./NotFound.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, label, [role="button"]');
      const handleMouseEnter = () => setHovered(true);
      const handleMouseLeave = () => setHovered(false);

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    window.addEventListener("mousemove", moveCursor);
    const cleanupHover = addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cleanupHover();
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'hovered' : ''} hidden sm:block bg-yellow-400 rounded-full w-8 h-8 border-2 border-pink-500 shadow-lg transition-transform duration-100 ease-out ${hovered ? 'scale-125' : 'scale-100'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    />
  );
}

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden font-sans">
          <Navbar />
          <AnimatedBackground />
          <main className="flex flex-col space-y-16 px-4 sm:px-8 lg:px-16">
            <Home />
            <About />
            <Portofolio />
            <ContactPage />
          </main>
          <motion.footer
            className="mt-16 py-12  text-gray-800 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
              <motion.div
                className="bg-white/90 rounded-2xl shadow-lg border border-pink-200 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* About Section */}
                  <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold text-pink-600 mb-2 tracking-tight">About Gema</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Siti Mustagimah, a Digital Media student creating intuitive UI/UX designs with creativity and empathy.
                    </p>
                  </motion.div>

                  {/* Contact Section */}
                  <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-pink-600 mb-2 tracking-tight">Get in Touch</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <FaEnvelope className="text-pink-500 text-lg" />
                        siti.mustagimah@students.ac.id
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="text-pink-500 text-lg">📍</span>
                        Yogyakarta, Indonesia
                      </li>
                    </ul>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-lg font-semibold text-pink-600 mb-2 tracking-tight">Follow Me</h3>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <motion.a
                        href="https://github.com/sitimustagimah"
                        className="text-pink-500 bg-pink-100 p-2.5 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaGithub size={24} />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com/in/sitimustagimah"
                        className="text-pink-500 bg-pink-100 p-2.5 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaLinkedin size={24} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="mt-8 textesthesi-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                © 2025 Siti Mustagimah. All rights reserved.
              </motion.div>
            </div>
          </motion.footer>
        </div>
      )}
    </>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="w-full min-h-screen bg-transparent overflow-x-hidden">
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;