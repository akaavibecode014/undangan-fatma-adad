"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import SplashScreen from "@/components/SplashScreen";
import Envelope from "@/components/Envelope";
import Mukadimah from "@/components/Mukadimah";
import BrideGroom from "@/components/BrideGroom";
import SaveTheDate from "@/components/SaveTheDate";
import LoveStory from "@/components/LoveStory";
import Protocol from "@/components/Protocol";

import DigitalGift from "@/components/DigitalGift";
import RSVPGuestbook from "@/components/RSVPGuestbook";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

function WeddingApp() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "";

  const [splashDone, setSplashDone] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  // Lock scroll until opened
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    // Smooth scroll to mukadimah
    setTimeout(() => {
      document.getElementById("mukadimah")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <main className="relative">
      {/* Splash */}
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {/* Envelope (Cover) — always visible until opened */}
      <AnimatePresence>
        {splashDone && !isOpened && (
          <motion.div
            key="envelope-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Envelope guestName={guestName} onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content sections — revealed after opening */}
      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Keep envelope as hero */}
          <Envelope guestName={guestName} onOpen={() => {}} />

          {/* Divider between sections */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <Mukadimah />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <BrideGroom />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <SaveTheDate />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <LoveStory />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <Protocol />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />



          <DigitalGift />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <RSVPGuestbook guestName={guestName} />
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <Footer />
        </motion.div>
      )}

      {/* Music Player */}
      <MusicPlayer shouldPlay={isOpened} />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="font-script text-4xl shimmer-text">F & A</div>
      </div>
    }>
      <WeddingApp />
    </Suspense>
  );
}
