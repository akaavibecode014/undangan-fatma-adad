"use client";

import { QRCodeSVG } from "qrcode.react";
import { Download, ScanLine } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider } from "./ui/FloralAccent";

export default function QRCheckin({ guestName }) {
  const qrValue = JSON.stringify({
    name: guestName || "Tamu Undangan",
    event: "Wedding Pasha & Putri",
    date: "2026-07-25",
    type: "guest-checkin",
  });

  return (
    <section
      id="qr-checkin"
      className="relative section-padding botanical-bg overflow-hidden"
    >
      <div className="max-w-lg mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold/60 mb-2">
            Check-in
          </p>
          <h2 className="font-script text-4xl md:text-5xl shimmer-text mb-2">
            Smart QR Code
          </h2>
          <FloralDivider width={150} className="mx-auto mt-4" />
        </AnimatedSection>

        {/* QR Card */}
        <AnimatedSection variant="scale" delay={0.2}>
          <div className="glass-card p-8 text-center relative">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/25" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/25" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/25" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/25" />

            <div className="flex justify-center mb-4">
              <ScanLine className="w-6 h-6 text-sage" />
            </div>

            <p className="font-serif text-sm text-charcoal/60 mb-6">
              Tunjukkan QR code ini saat registrasi di lokasi acara
            </p>

            {/* QR Code */}
            <div className="inline-block p-4 bg-white rounded-2xl shadow-inner border border-gold/10">
              <QRCodeSVG
                value={qrValue}
                size={180}
                level="H"
                bgColor="#FFFFFF"
                fgColor="#2C2C2C"
                includeMargin={false}
              />
            </div>

            {/* Guest name */}
            <div className="mt-6">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-1">
                Nama Tamu
              </p>
              <p className="font-display text-lg font-semibold text-charcoal/80">
                {guestName || "Tamu Undangan"}
              </p>
            </div>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-sage/5 rounded-xl border border-sage/10">
              <div className="flex items-start gap-3">
                <Download className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <p className="font-serif text-xs text-charcoal/50 text-left leading-relaxed">
                  Screenshot QR code ini dan simpan di galeri Anda untuk
                  mempercepat proses check-in saat tiba di lokasi.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
