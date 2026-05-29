"use client";

import { Heart } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider, FloralLeaf } from "./ui/FloralAccent";

export default function Footer() {
  return (
    <footer id="footer" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 floral-pattern" />
      <FloralLeaf className="absolute bottom-0 left-0 opacity-20" size={100} />
      <FloralLeaf className="absolute bottom-0 right-0 opacity-20" size={100} flip />

      <div className="relative z-10 max-w-lg mx-auto text-center [text-shadow:0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,1)]">
        <AnimatedSection>
          <p className="font-script text-3xl md:text-4xl shimmer-text mb-4">
            Fatma & Adad
          </p>
          <FloralDivider width={120} className="mx-auto mb-6" />
          <p className="font-serif text-sm text-charcoal/60 leading-relaxed mb-2">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
          </p>
          <p className="font-serif text-sm text-charcoal/60 leading-relaxed mb-8">
            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
          <p className="font-display text-xs tracking-[0.3em] uppercase text-gold/60 mb-8">
            Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeIn" delay={0.3}>
          <div className="pt-8 border-t border-gold/10">
            <p className="font-serif text-xs text-charcoal/30 flex items-center justify-center gap-1.5">
              Made by Muhammad Hamka
            </p>
            <p className="font-serif text-[10px] text-charcoal/20 mt-1">
              © 2026 — All rights reserved
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
