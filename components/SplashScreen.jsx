"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import BloomingFlower from "./ui/BloomingFlower";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep splash screen visible for a bit longer so the blooming animation plays fully
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFCF9]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 floral-pattern opacity-30" />

          {/* Floating particles (Pollen/Light) */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold/40"
              initial={{
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                opacity: 0,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random(),
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Main content */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* The Blooming Flower Animation */}
            <BloomingFlower size={160} />

            {/* Initials appear after flower blooms */}
            <motion.h1
              className="font-script text-6xl md:text-7xl text-[#3A4A5A] mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              F & A
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-4 font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.0 }}
            >
              The Wedding
            </motion.p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
