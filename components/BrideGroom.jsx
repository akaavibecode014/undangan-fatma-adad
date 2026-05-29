"use client";

import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider, FloralBranch } from "./ui/FloralAccent";

const GroomIcon = ({ size = 60, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className}>
    {/* Head */}
    <circle cx="50" cy="40" r="22" />
    {/* Hair hint */}
    <path d="M 28 40 Q 28 18 50 18 Q 72 18 72 40" fill="currentColor" opacity="0.1" />
    {/* Shoulders */}
    <path d="M 20 95 Q 20 70 35 65 L 65 65 Q 80 70 80 95" />
    {/* Collar/Tie */}
    <path d="M 45 65 L 50 85 L 55 65 Z" fill="currentColor" opacity="0.3" />
  </svg>
);

const BrideIcon = ({ size = 60, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className}>
    {/* Head */}
    <circle cx="50" cy="40" r="20" />
    {/* Long Hair */}
    <path d="M 30 40 Q 30 15 50 15 Q 70 15 70 40 Q 75 75 85 85 M 30 40 Q 25 75 15 85" />
    {/* Hair Fill */}
    <path d="M 25 35 Q 50 10 75 35" fill="currentColor" opacity="0.1" />
    {/* Shoulders */}
    <path d="M 25 95 Q 25 75 40 70 L 60 70 Q 75 75 75 95" />
    {/* Necklace */}
    <path d="M 42 70 Q 50 78 58 70" opacity="0.4" />
  </svg>
);

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      className="relative section-padding overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 diamond-pattern opacity-40" />

      {/* Decorative botanicals */}
      <FloralBranch className="absolute top-0 left-0 -rotate-12 opacity-30" size={160} />
      <FloralBranch className="absolute bottom-0 right-0 rotate-[168deg] opacity-30" size={160} />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5C5C5C] mb-8 tracking-wide drop-shadow-md [text-shadow:0_0_15px_rgba(255,255,255,1),0_0_25px_rgba(255,255,255,0.8)]">
            Bride & Groom
          </h2>
          
          <div className="font-serif text-sm md:text-base text-charcoal/80 leading-relaxed max-w-sm mx-auto [text-shadow:0_0_15px_rgba(255,255,255,1),0_0_25px_rgba(255,255,255,0.8)]">
            <p className="mb-2">Assalamualaikum wr. wb.</p>
            <p className="mb-2">
              Dengan memohon Rahmat dan Ridho Allah SWT yang telah menciptakan makhluk-Nya secara berpasang-pasangan
            </p>
            <p>Kami bermaksud menyelenggarakan pernikahan kami</p>
          </div>
        </AnimatedSection>

        {/* Bride */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="text-center mb-12">
          <div className="glass-card p-8 md:p-10 relative">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/30" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/30" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30" />

            {/* Bride Icon */}
            <div className="flex justify-center mb-4">
              <BrideIcon size={60} className="text-charcoal/30" />
            </div>

            <p className="font-display text-xs tracking-[0.3em] uppercase text-sage-dark/60 mb-3">
              Mempelai Wanita
            </p>
            <h3 className="font-script text-4xl md:text-5xl text-charcoal mb-3">
              Fatma
            </h3>
            <p className="font-display text-lg text-charcoal/80 font-medium">
              Fatma Fauziah Fadillah, S.Pd
            </p>
            <div className="my-4">
              <FloralDivider width={100} />
            </div>
            <p className="font-serif text-sm text-charcoal/60 leading-relaxed">
              Putri pertama dari
              <br />
              <span className="text-charcoal/80 font-medium">
                Bapak Agus
              </span>
              <br />&<br />
              <span className="text-charcoal/80 font-medium">
                Ibu Marni
              </span>
            </p>
          </div>
        </AnimatedSection>

        {/* Connector */}
        <AnimatedSection variant="scale" className="flex justify-center my-6">
          <div className="relative">
            <div className="w-12 h-12 border-2 border-gold/40 rotate-45 flex items-center justify-center">
              <span className="font-script text-2xl text-gold -rotate-45">
                &
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Groom */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="text-center mt-12">
          <div className="glass-card p-8 md:p-10 relative">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/30" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/30" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30" />

            {/* Groom Icon */}
            <div className="flex justify-center mb-4">
              <GroomIcon size={60} className="text-charcoal/30" />
            </div>

            <p className="font-display text-xs tracking-[0.3em] uppercase text-sage-dark/60 mb-3">
              Mempelai Pria
            </p>
            <h3 className="font-script text-4xl md:text-5xl text-charcoal mb-3">
              Adad
            </h3>
            <p className="font-display text-lg text-charcoal/80 font-medium">
              Adad Mauludi
            </p>
            <div className="my-4">
              <FloralDivider width={100} />
            </div>
            <p className="font-serif text-sm text-charcoal/60 leading-relaxed">
              Putra ketiga dari
              <br />
              <span className="text-charcoal/80 font-medium">
                Bapak Darus
              </span>
              <br />&<br />
              <span className="text-charcoal/80 font-medium">
                Ibu Emi
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
