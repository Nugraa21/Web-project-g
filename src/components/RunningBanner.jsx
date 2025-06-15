// components/RunningBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const RunningBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9998] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black py-2 shadow-lg overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap text-sm md:text-base font-bold tracking-wide px-4 animate-marquee"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "linear"
        }}
      >
        <span>🚧 Website ini sedang dalam pengembangan oleh Developer Nugra21 — Update rutin ditambahkan! 🚀</span>
        <span>🚧 Website ini sedang dalam pengembangan oleh Developer Nugra21 — Update rutin ditambahkan! 🚀</span>
      </motion.div>
    </div>
  );
};

export default RunningBanner;
