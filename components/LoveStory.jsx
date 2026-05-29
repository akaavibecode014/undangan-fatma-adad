"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider } from "./ui/FloralAccent";

const timelineData = [
  {
    title: "Awal Berkenalan",
    date: "22 Juni 2024",
    description: "Segala sesuatu telah tertulis dengan indah dalam rencana-Nya. Kami berkenalan melalui media sosial. Perkenalan sederhana tersebut menjadi awal perjalanan panjang kami.",
  },
  {
    title: "Pendekatan",
    date: "5 Juli 2024",
    description: "Tidak ada yang kebetulan di dunia ini. Kita tidak bisa memilih kepada siapa jatuh cinta. Satu minggu setelah kita berkenalan, Adad memberikan promise ring dan ingin kita selalu bersama selamanya.",
  },
  {
    title: "Keseriusan",
    date: "5 Agustus 2024",
    description: "Semua sudah tersusun rapi oleh Sang Maha Kuasa. Jarak tidak jadi penghalang untuk keseriusan kita. Tepat satu bulan setelah membuktikan keseriusannya, kedua orang tua Adad pun berkunjung ke Garut untuk membuktikan keseriusannya yang semakin yakin.",
  },
  {
    title: "Timbal Balik",
    date: "3 April 2025",
    description: "\"Percayalah, bukan karena bertemu lalu berjodoh tapi karena jodohlah kami dipertemukan. Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu\" (HR. Ali bin Abi Thalib). Atas kehendak-Nya, keluarga Fatma memberikan balasan untuk keseriusannya dengan berkunjung ke Tasik.",
  },
  {
    title: "Final",
    date: "6 Juni 2026",
    description: "Kami melakukan Long Distance Relationship (LDR) walaupun tanpa pernah adanya pertemuan secara langsung di tahun ke-2 kami bersama. Dengan penuh rasa syukur, kami ingin merayakan cinta kami di hari yang istimewa. Cinta yang sakral dan cinta yang bermuara pada cinta-Nya. Untuk pertemuan pertama kami secara langsung, Sabtu, 6 Juni 2026, dihadapan Allah dan keluarga besar dengan mengucapkan Ijab Kabul secara sakral. Kami siap melangkah menuju fase kehidupan baru, saling mencintai, mendukung, dan hidup bahagia bersama.",
  }
];

export default function LoveStory() {
  return (
    <section id="love-story" className="relative section-padding botanical-bg overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <AnimatedSection className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold/60 mb-2">
            Perjalanan Cinta
          </p>
          <h2 className="font-script text-4xl md:text-5xl shimmer-text mb-2">
            Love Story
          </h2>
          <FloralDivider width={150} className="mx-auto mt-4" />
        </AnimatedSection>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection
                key={index}
                variant="fadeUp"
                delay={index * 0.1}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)] -translate-x-1/2 mt-6 md:mt-0 z-10 border-4 border-ivory" />

                {/* Content */}
                <div className={`pl-10 md:pl-0 w-full md:w-1/2 flex ${isEven ? "md:justify-start md:pl-10" : "md:justify-end md:pr-10"}`}>
                  <div className="glass-card p-6 md:p-8 hover:border-gold/40 transition-colors duration-500 w-full md:max-w-md">
                    <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"} mb-3`}>
                      <span className="inline-block px-3 py-1 bg-gold/10 text-gold-dark text-[10px] uppercase tracking-widest font-display rounded-full mb-3 border border-gold/20">
                        {item.date}
                      </span>
                      <h3 className={`font-script text-3xl text-charcoal/90 text-left ${isEven ? "md:text-left" : "md:text-right"}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`font-serif text-sm text-charcoal/70 leading-relaxed text-left ${isEven ? "md:text-left" : "md:text-right"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
