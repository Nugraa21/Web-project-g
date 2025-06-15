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
      className={`custom-cursor ${hovered ? 'hovered' : ''} hidden sm:block bg-pink-300 rounded-full w-8 h-8 border-2 border-yellow-400 shadow-lg transition-transform duration-100 ease-out ${hovered ? 'scale-125' : 'scale-100'}`}
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
        <div className="relative w-full min-h-screen bg-gradient-to-b from-white to-pink-100 overflow-x-hidden font-sans">
          <Navbar />
          <AnimatedBackground />
          <main className="flex flex-col space-y-16 px-4 sm:px-8 lg:px-16">
            <Home />
            <About />
            <Portofolio />
            <ContactPage />
          </main>
          <footer className="mt-16 py-8 bg-pink-50 border-t-4 border-yellow-400 text-gray-800 text-center text-sm font-semibold">
            <div className="container mx-auto px-4">
              © 2025 Ludang Prasetyo Nugroho. All rights reserved.
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
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