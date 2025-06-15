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
    <span className="font-mono text-pink-500 tracking-wider">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const AuroraBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat bg-pink-50" />
    <div className="absolute w-[500px] h-[500px] bg-pink-300 rounded-full blur-3xl opacity-30 animate-float top-10 left-10" />
    <div className="absolute w-[400px] h-[400px] bg-yellow-200 rounded-full blur-2xl opacity-30 animate-float-slow bottom-10 right-10" />
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
            transition: { duration: 0.8 }
          }}
        >
          <AuroraBackground />
          <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center space-y-10 max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="mb-3 text-lg text-pink-600 font-semibold tracking-wide animate-bounce">
                  Loading Experience... {progress}%
                </div>
                <div className="w-full h-3 bg-yellow-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-yellow-300"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeInOut', duration: 0.4 }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-dashed border-pink-300 rounded-full shadow hover:scale-105 transition font-handwritten">
                  <Globe className="text-pink-500 w-5 h-5" />
                  <TypewriterEffect text="Siti Mustagimah." />
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