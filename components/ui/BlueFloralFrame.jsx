"use client";
import { motion } from "framer-motion";

function Flower({ color, delay, className }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`absolute w-32 h-32 md:w-48 md:h-48 drop-shadow-xl z-20 ${className}`}
      initial={{ scale: 0, rotate: -30 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, delay, type: "spring", bounce: 0.4 }}
    >
      <motion.g
        animate={{ rotate: [-3, 3, -3], scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ originX: "50px", originY: "50px" }}
      >
        {/* Simple elegant 5-petal flower representation */}
        <path d="M50 50 C 20 20, 10 50, 50 50 C 20 50, 10 80, 50 50 C 50 80, 80 90, 50 50 C 90 80, 90 50, 50 50 C 90 50, 80 20, 50 50 C 80 20, 50 10, 50 50 C 50 10, 20 20, 50 50" fill={color} opacity="0.9" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Inner pistil details */}
        <circle cx="50" cy="50" r="8" fill="#FDE047" />
        <circle cx="50" cy="50" r="4" fill="#EAB308" />
      </motion.g>
    </motion.svg>
  );
}

function Butterfly({ delay, className }) {
  return (
    <motion.svg
      viewBox="0 0 50 50"
      className={`absolute w-12 h-12 md:w-16 md:h-16 drop-shadow-md z-30 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
    >
      <motion.g
        animate={{ y: [-8, 8, -8], x: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <motion.path 
          d="M25 25 C 10 10, -5 20, 25 25" 
          fill="#8B5CF6" 
          animate={{ scaleX: [1, 0.2, 1] }}
          transition={{ duration: 0.25, repeat: Infinity }}
          style={{ originX: "25px", originY: "25px" }}
        />
        <motion.path 
          d="M25 25 C 40 10, 55 20, 25 25" 
          fill="#8B5CF6" 
          animate={{ scaleX: [1, 0.2, 1] }}
          transition={{ duration: 0.25, repeat: Infinity }}
          style={{ originX: "25px", originY: "25px" }}
        />
        <motion.path 
          d="M25 25 C 15 35, 5 45, 25 25" 
          fill="#A78BFA" 
          animate={{ scaleX: [1, 0.2, 1] }}
          transition={{ duration: 0.25, repeat: Infinity }}
          style={{ originX: "25px", originY: "25px" }}
        />
        <motion.path 
          d="M25 25 C 35 35, 45 45, 25 25" 
          fill="#A78BFA" 
          animate={{ scaleX: [1, 0.2, 1] }}
          transition={{ duration: 0.25, repeat: Infinity }}
          style={{ originX: "25px", originY: "25px" }}
        />
        <path d="M24 15 L26 15 L25 35 Z" fill="#333" />
      </motion.g>
    </motion.svg>
  );
}

export default function BlueFloralFrame({ children }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden z-10">
      
      {/* Background Dimmer specific to Envelope to ensure text readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-0" />

      {/* The Geometric Frame */}
      <div 
        className="absolute inset-4 md:inset-8 border-2 border-gold/70 pointer-events-none z-10 shadow-xl" 
        style={{ clipPath: 'polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)' }}
      >
        <div 
          className="absolute inset-2 border border-gold/50" 
          style={{ clipPath: 'polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)' }}
        />
      </div>

      {/* Sage Green Flowers Top Left */}
      <Flower color="#8CA380" delay={0.2} className="-top-10 -left-10" />
      <Flower color="#A2B596" delay={0.4} className="top-16 -left-10 scale-75" />
      
      {/* Top Right */}
      <Flower color="#8CA380" delay={0.3} className="-top-10 -right-10 rotate-90" />
      <Flower color="#A2B596" delay={0.5} className="top-16 -right-10 scale-75 rotate-45" />

      {/* Bottom Left */}
      <Flower color="#8CA380" delay={0.4} className="-bottom-10 -left-10 -rotate-90" />
      <Flower color="#A2B596" delay={0.6} className="bottom-16 -left-10 scale-75 -rotate-45" />

      {/* Bottom Right */}
      <Flower color="#8CA380" delay={0.5} className="-bottom-10 -right-10 rotate-180" />
      <Flower color="#A2B596" delay={0.7} className="bottom-16 -right-10 scale-75 rotate-180" />
      
      {/* Butterflies */}
      <Butterfly delay={1} className="top-[25%] left-4 md:left-12 rotate-12" />
      <Butterfly delay={1.5} className="bottom-[35%] right-4 md:right-12 -rotate-12" />

      {/* Content wrapper */}
      <div className="relative z-20 w-full max-w-md mx-auto text-center bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/80">
        {children}
      </div>
    </div>
  );
}
