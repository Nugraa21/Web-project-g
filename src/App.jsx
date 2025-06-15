import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AnimatedBackground from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Portofolio from "./Pages/Portofolio.jsx";
import ContactPage from "./Pages/Contact.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen.jsx";
import { AnimatePresence, motion } from 'framer-motion';
import NotFound from "./NotFound.jsx";
import RunningBanner from "./components/RunningBanner.jsx";

import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiCloudflare,
  SiGithub,
  SiLinkedin
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

// ✅ Optimized custom cursor
function CustomCursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      requestAnimationFrame(() => {
        setCoords({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden sm:block">
      <div
        className="w-4 h-4 rounded-full bg-yellow-400 border border-pink-500 shadow-md"
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: coords.x,
          top: coords.y,
        }}
      />
    </div>
  );
}

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />}
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

          {/* Footer */}
            <motion.footer
              className="mt-20 bg-gradient-to-tr from-white to-pink-50 border-t border-pink-100 shadow-inner py-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  
                  {/* WEBSITE INFO */}
                  <div>
                    <h4 className="text-xl font-semibold text-pink-600 mb-4 flex items-center gap-2">
                      <span></span> Website Info
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Built with modern web technologies to ensure performance and style.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 shadow-sm">
                        <SiNodedotjs className="text-green-600" /> Node.js
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 shadow-sm">
                        <SiReact className="text-blue-500" /> React
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 shadow-sm">
                        <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 shadow-sm">
                        <SiCloudflare className="text-orange-500" /> Cloudflare
                      </span>
                    </div>
                  </div>

                  {/* CONTACT */}
                  <div>
                    <h4 className="text-xl font-semibold text-pink-600 mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaEnvelope className="text-pink-500" />
                        siti.mustagimah@students.ac.id
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-500">📍</span> Yogyakarta, Indonesia
                      </li>
                    </ul>
                  </div>

                  {/* SOCIALS */}
                  <div>
                    <h4 className="text-xl font-semibold text-pink-600 mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/sitimustagimah"
                        target="_blank"
                        className="text-pink-600 bg-pink-100 p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all"
                      >
                        <SiGithub size={20} />
                      </a>
                      <a
                        href="https://linkedin.com/in/sitimustagimah"
                        target="_blank"
                        className="text-pink-600 bg-pink-100 p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all"
                      >
                        <SiLinkedin size={20} />
                      </a>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 italic">
                      Let's build something amazing together 🌟
                    </p>
                  </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
                  <a
                    href="https://nugra.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold hover:underline"
                  >
                    © 2025 Nugra21
                  </a>{" "}
                  — Made with Code.
                </div>
              </div>
            </motion.footer>
          <RunningBanner />
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
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
