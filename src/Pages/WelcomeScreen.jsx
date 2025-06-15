import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="font-mono text-pink-600 font-semibold tracking-wider">
      {displayText}
      <motion.span
        className="inline-block"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        |
      </motion.span>
    </span>
  );
};

const AuroraBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="w-full h-full bg-pink-50" />
    <motion.div
      className="absolute w-[600px] h-[600px] bg-pink-300 rounded-full blur-3xl opacity-20"
      animate={{
        x: [-100, 100],
        y: [-50, 50],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{ top: '10%', left: '10%' }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] bg-yellow-200 rounded-full blur-2xl opacity-20"
      animate={{
        x: [100, -100],
        y: [50, -50],
        scale: [1, 1.15, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      style={{ bottom: '10%', right: '10%' }}
    />
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => onLoadingComplete?.(), 1000);
      }, 600);
    }
  }, [progress, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-pink-50 text-gray-900 z-50 font-handwritten"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: 'easeOut' }
          }}
        >
          <AuroraBackground />
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center space-y-12 max-w-3xl mx-auto"
            >
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-dashed border-pink-400 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Globe className="text-pink-600 w-6 h-6 animate-spin-slow" />
                <TypewriterEffect text="Siti Mustagimah." />
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="mb-4 text-xl text-pink-600 font-semibold tracking-wide">
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Crafting Experience... {progress}%
                  </motion.span>
                </div>
                <div className="w-full h-4 bg-yellow-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-400"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeInOut', duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;