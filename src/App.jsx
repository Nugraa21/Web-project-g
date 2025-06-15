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
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// ✅ Optimized custom cursor (no lag)
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
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden sm:block"
    >
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
            className="mt-16 py-12 bg-transparent text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
              <div className="bg-white/80 rounded-xl shadow-md p-8 border border-pink-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* About */}
                  <div>
                    <h3 className="text-lg font-bold text-pink-600 mb-2">About Gema</h3>
                    <p className="text-gray-600 text-sm">
                      Siti Mustagimah, a Digital Media student creating intuitive UI/UX designs with creativity and empathy.
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-lg font-bold text-pink-600 mb-2">Get in Touch</h3>
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

                  {/* Social */}
                  <div>
                    <h3 className="text-lg font-bold text-pink-600 mb-2">Follow Me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/sitimustagimah"
                        target="_blank"
                        className="text-pink-600 bg-pink-100 p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href="https://linkedin.com/in/sitimustagimah"
                        target="_blank"
                        className="text-pink-600 bg-pink-100 p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                <a
                  href="https://nugra.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 font-semibold hover:underline"
                >
                  © 2025 Nugra21
                </a> — All rights reserved.
              </div>
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
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
