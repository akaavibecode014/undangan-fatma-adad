"use client";

import { Palette, Shirt, Users, Heart } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider } from "./ui/FloralAccent";

export default function Protocol() {
  const protocols = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Protokol Acara",
      desc: "Hadir tepat waktu sesuai sesi undangan yang tertera",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Konfirmasi",
      desc: "Mohon konfirmasi kehadiran melalui RSVP di bawah ini",
    },
  ];

  return (
    <section id="protocol" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 diamond-pattern opacity-30" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold/60 mb-2">
            Please Note
          </p>
          <h2 className="font-script text-4xl md:text-5xl shimmer-text mb-2">
            Protokol & Dresscode
          </h2>
          <FloralDivider width={150} className="mx-auto mt-4" />
        </AnimatedSection>

        {/* Protocol cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {protocols.map((item, i) => (
            <AnimatedSection
              key={item.title}
              variant="scale"
              delay={0.1 + i * 0.12}
            >
              <div className="glass-card p-6 text-center h-full group hover:border-gold/40 transition-colors duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage/20 group-hover:text-sage-dark transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-sm font-semibold text-charcoal/80 mb-2 tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="font-serif text-sm text-charcoal/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Color swatches */}
        <AnimatedSection variant="fadeUp" delay={0.5} className="mt-8">
          <div className="glass-card p-6 text-center">
            <p className="font-display text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">
              Referensi Dresscode
            </p>
            <div className="flex justify-center gap-3">
              {[
                { color: "#9CAF88", name: "Sage" },
                { color: "#B8C9D9", name: "Dusty Blue" },
                { color: "#C8B8D9", name: "Lilac" },
                { color: "#F5F0E8", name: "Cream" },
                { color: "#D4B87A", name: "Gold" },
              ].map((swatch) => (
                <div key={swatch.name} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: swatch.color }}
                  />
                  <span className="text-[10px] font-display text-charcoal/40 tracking-wider">
                    {swatch.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
