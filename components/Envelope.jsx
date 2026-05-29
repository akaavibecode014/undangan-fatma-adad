"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import BlueFloralFrame from "./ui/BlueFloralFrame";
import { FloralDivider } from "./ui/FloralAccent";

export default function Envelope({ guestName, onOpen }) {
  return (
    <section
      id="envelope"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-lake.png')" }}
    >
      <BlueFloralFrame>
        {/* Top ornament */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-8 h-8 border border-gold/70 rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 border border-gold/50 rotate-0" />
          </div>
        </motion.div>

        {/* The Wedding Of */}
        <motion.p
          className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-charcoal/70 mb-2 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          The Wedding Of
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          className="font-script text-5xl md:text-6xl text-[#3A4A5A] my-3 leading-tight drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Fatma
        </motion.h1>

        <motion.p
          className="font-script text-3xl text-gold my-1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          &amp;
        </motion.p>

        <motion.h1
          className="font-script text-5xl md:text-6xl text-[#3A4A5A] my-3 leading-tight drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          Adad
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="my-6 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        />

        {/* Guest name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
        >
          <p className="font-serif text-xs text-charcoal/60 tracking-wider uppercase mb-1">
            Kepada Yth.
          </p>
          <p className="font-serif text-xl md:text-2xl text-[#3A4A5A] font-medium italic">
            {guestName || "Tamu Undangan"}
          </p>
        </motion.div>

        {/* Open button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
        >
          <button
            onClick={onOpen}
            className="btn-gold group !bg-[#809BCE] !shadow-[#809BCE]/30 hover:!bg-[#6382BA]"
            id="open-invitation-btn"
          >
            <Mail className="w-4 h-4 group-hover:animate-bounce" />
            <span>Buka Undangan</span>
          </button>
        </motion.div>
      </BlueFloralFrame>
    </section>
  );
}
