"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider } from "./ui/FloralAccent";

export default function Mukadimah() {
  const words =
    "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.";
  const wordArray = words.split(" ");

  return (
    <section
      id="mukadimah"
      className="relative section-padding botanical-bg overflow-hidden"
    >
      <div className="max-w-lg mx-auto text-center relative z-10 [text-shadow:0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,1)]">
        {/* Bismillah */}
        <AnimatedSection variant="fadeIn" delay={0.2}>
          <p className="font-script text-3xl md:text-4xl text-gold mb-8">
            Bismillahirrahmanirrahim
          </p>
        </AnimatedSection>

        {/* Opening ornament */}
        <AnimatedSection variant="scale" delay={0.4}>
          <div className="flex justify-center mb-8">
            <FloralDivider width={180} />
          </div>
        </AnimatedSection>

        {/* Staggered text reveal */}
        <div className="mb-8">
          <motion.p
            className="font-serif text-base md:text-lg leading-relaxed text-charcoal/80 text-balance"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {wordArray.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1.5"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.05,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Quran reference */}
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <p className="font-display text-sm tracking-wider text-gold/70 italic">
            — QS. Ar-Rum: 21 —
          </p>
        </AnimatedSection>

        {/* Closing ornament */}
        <AnimatedSection variant="fadeIn" delay={0.5}>
          <div className="flex justify-center mt-8">
            <FloralDivider width={120} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
