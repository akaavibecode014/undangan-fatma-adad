"use client";

import { motion } from "framer-motion";

/**
 * FloralAccent - SVG botanical/floral decorative elements
 * Used throughout the wedding invitation for visual elegance
 */
export function FloralLeaf({
  className = "",
  color = "#9CAF88",
  opacity = 0.3,
  size = 120,
  flip = false,
}) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 10C60 10 20 30 15 70C10 110 60 110 60 110C60 110 110 110 105 70C100 30 60 10 60 10Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M60 20C60 20 60 100 60 110"
        stroke={color}
        strokeOpacity={opacity + 0.1}
        strokeWidth="1"
      />
      <path
        d="M60 40C45 35 30 45 25 55"
        stroke={color}
        strokeOpacity={opacity + 0.05}
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M60 55C75 50 90 55 95 65"
        stroke={color}
        strokeOpacity={opacity + 0.05}
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M60 70C45 65 35 70 30 80"
        stroke={color}
        strokeOpacity={opacity + 0.05}
        strokeWidth="0.8"
        fill="none"
      />
    </motion.svg>
  );
}

export function FloralBranch({
  className = "",
  color = "#9CAF88",
  opacity = 0.25,
  size = 200,
}) {
  return (
    <motion.svg
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={className}
      width={size}
      height={size * 0.5}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main stem */}
      <motion.path
        d="M10 90C30 80 50 60 80 50C110 40 140 35 190 30"
        stroke={color}
        strokeOpacity={opacity + 0.2}
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      {/* Leaves */}
      <path
        d="M40 75C35 65 45 55 55 60C50 70 40 75 40 75Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M70 58C60 50 65 38 78 40C75 52 70 58 70 58Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M100 45C90 38 93 26 105 28C103 40 100 45 100 45Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M130 38C122 30 126 20 138 22C135 34 130 38 130 38Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M160 33C155 24 160 15 170 18C168 28 160 33 160 33Z"
        fill={color}
        fillOpacity={opacity}
      />
      {/* Small berries */}
      <circle cx="50" cy="62" r="2" fill={color} fillOpacity={opacity + 0.1} />
      <circle cx="82" cy="42" r="2" fill={color} fillOpacity={opacity + 0.1} />
      <circle
        cx="115"
        cy="32"
        r="1.5"
        fill={color}
        fillOpacity={opacity + 0.1}
      />
    </motion.svg>
  );
}

export function FloralDivider({
  className = "",
  color = "#C4A265",
  width = 200,
}) {
  return (
    <svg
      className={className}
      width={width}
      height="30"
      viewBox="0 0 200 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="15"
        x2="70"
        y2="15"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="0.5"
      />
      <line
        x1="130"
        y1="15"
        x2="200"
        y2="15"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="0.5"
      />
      {/* Center diamond */}
      <path
        d="M100 5L110 15L100 25L90 15Z"
        stroke={color}
        strokeOpacity="0.5"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M100 9L106 15L100 21L94 15Z"
        fill={color}
        fillOpacity="0.15"
      />
      {/* Side dots */}
      <circle cx="75" cy="15" r="1.5" fill={color} fillOpacity="0.3" />
      <circle cx="125" cy="15" r="1.5" fill={color} fillOpacity="0.3" />
    </svg>
  );
}

export function FloralWreath({ className = "", size = 280 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left branch */}
      <path
        d="M80 240C50 220 30 180 25 140C20 100 30 60 60 35"
        stroke="#9CAF88"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Right branch */}
      <path
        d="M200 240C230 220 250 180 255 140C260 100 250 60 220 35"
        stroke="#9CAF88"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left leaves */}
      <path
        d="M65 220C55 210 50 195 60 190C70 195 65 210 65 220Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M45 180C35 170 32 155 42 150C52 155 48 170 45 180Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M30 140C22 128 22 112 32 110C40 118 35 132 30 140Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M35 100C28 88 30 72 40 70C46 80 40 92 35 100Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M50 65C45 52 48 38 58 38C62 48 55 58 50 65Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      {/* Right leaves */}
      <path
        d="M215 220C225 210 230 195 220 190C210 195 215 210 215 220Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M235 180C245 170 248 155 238 150C228 155 232 170 235 180Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M250 140C258 128 258 112 248 110C240 118 245 132 250 140Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M245 100C252 88 250 72 240 70C234 80 240 92 245 100Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      <path
        d="M230 65C235 52 232 38 222 38C218 48 225 58 230 65Z"
        fill="#9CAF88"
        fillOpacity="0.2"
      />
      {/* Small gold accents */}
      <circle cx="70" cy="200" r="2" fill="#C4A265" fillOpacity="0.3" />
      <circle cx="40" cy="160" r="2" fill="#C4A265" fillOpacity="0.3" />
      <circle cx="30" cy="120" r="1.5" fill="#C4A265" fillOpacity="0.3" />
      <circle cx="210" cy="200" r="2" fill="#C4A265" fillOpacity="0.3" />
      <circle cx="240" cy="160" r="2" fill="#C4A265" fillOpacity="0.3" />
      <circle cx="250" cy="120" r="1.5" fill="#C4A265" fillOpacity="0.3" />
    </svg>
  );
}
