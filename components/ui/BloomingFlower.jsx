"use client";
import { motion } from "framer-motion";

export default function BloomingFlower({ size = 180 }) {
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-lg">
        {/* Stem/Base */}
        <motion.path
          d="M50 90 L50 110"
          stroke="#5C7A53"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Back outer petals (Purple) */}
        <motion.path
          d="M50 80 C 30 60, 10 40, 50 10 C 90 40, 70 60, 50 80"
          fill="#B0A0CD"
          initial={{ scale: 0.1, rotate: -60, y: 30 }}
          animate={{ scale: 1, rotate: -35, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ originX: "50px", originY: "80px" }}
        />
        <motion.path
          d="M50 80 C 30 60, 10 40, 50 10 C 90 40, 70 60, 50 80"
          fill="#B0A0CD"
          initial={{ scale: 0.1, rotate: 60, y: 30 }}
          animate={{ scale: 1, rotate: 35, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ originX: "50px", originY: "80px" }}
        />
        
        {/* Middle petals (Blue) */}
        <motion.path
          d="M50 85 C 30 55, 15 35, 50 15 C 85 35, 70 55, 50 85"
          fill="#809BCE"
          initial={{ scale: 0.2, rotate: -40, y: 30 }}
          animate={{ scale: 1, rotate: -18, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          style={{ originX: "50px", originY: "85px" }}
        />
        <motion.path
          d="M50 85 C 30 55, 15 35, 50 15 C 85 35, 70 55, 50 85"
          fill="#809BCE"
          initial={{ scale: 0.2, rotate: 40, y: 30 }}
          animate={{ scale: 1, rotate: 18, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          style={{ originX: "50px", originY: "85px" }}
        />
        
        {/* Front center petal (Light Blue/Purple) */}
        <motion.path
          d="M50 90 C 35 60, 30 40, 50 20 C 70 40, 65 60, 50 90"
          fill="#95B8D1"
          initial={{ scale: 0.3, y: 25 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          style={{ originX: "50px", originY: "90px" }}
        />
      </svg>
    </div>
  );
}
