/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFDF7",
        sage: {
          DEFAULT: "#9CAF88",
          dark: "#7A9568",
          light: "#B8CCA8",
        },
        gold: {
          DEFAULT: "#C4A265",
          light: "#D4B87A",
          dark: "#A8894F",
        },
        pastel: {
          blue: "#B8C9D9",
          purple: "#C8B8D9",
        },
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif: ['"Cormorant Garamond"', "serif"],
        display: ['"Playfair Display"', "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C4A265 0%, #D4B87A 50%, #C4A265 100%)",
        "sage-gradient":
          "linear-gradient(135deg, #9CAF88 0%, #B8CCA8 50%, #9CAF88 100%)",
      },
    },
  },
  plugins: [],
};
