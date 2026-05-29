"use client";

import { Calendar, MapPin, Clock, Navigation } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import CountdownTimer from "./ui/CountdownTimer";
import { FloralDivider } from "./ui/FloralAccent";

const WEDDING_DATE = "2026-06-06T08:00:00+07:00";

function generateGoogleCalendarUrl(title, startDate, endDate, location, description) {
  const formatDate = (d) =>
    new Date(d)
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  const url = new URL("https://www.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", title);
  url.searchParams.set("dates", `${formatDate(startDate)}/${formatDate(endDate)}`);
  url.searchParams.set("location", location);
  url.searchParams.set("details", description);
  return url.toString();
}

export default function SaveTheDate() {
  const calendarUrl = generateGoogleCalendarUrl(
    "Pernikahan Adad & Fatma",
    "2026-06-06T08:00:00+07:00",
    "2026-06-06T16:00:00+07:00",
    "Rumah Kediaman Mempelai Wanita, Sukagalih, Kec. Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151",
    "Akad Nikah: 08:00 WIB\\nResepsi: 11:00 WIB\\n\\nKami sangat mengharapkan kehadiran Anda."
  );

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=-7.202054,107.881240";

  const events = [
    {
      title: "Akad Nikah",
      time: "08:00 — 10:00 WIB",
      icon: <Clock className="w-5 h-5" />,
      location: "Rumah Kediaman Mempelai Wanita",
    },
    {
      title: "Resepsi",
      time: "11:00 — 14:00 WIB",
      icon: <Clock className="w-5 h-5" />,
      location: "Rumah Kediaman Mempelai Wanita",
    },
  ];

  return (
    <section
      id="save-the-date"
      className="relative section-padding botanical-bg overflow-hidden"
    >
      <div className="max-w-lg mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold/60 mb-2">
            Mark Your Calendar
          </p>
          <h2 className="font-script text-4xl md:text-5xl shimmer-text mb-2">
            Save The Date
          </h2>
          <FloralDivider width={150} className="mx-auto mt-4" />
        </AnimatedSection>

        {/* Date Display */}
        <AnimatedSection variant="scale" delay={0.2} className="text-center mb-10">
          <div className="glass-card p-8 relative">
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/25" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/25" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/25" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/25" />

            <p className="font-display text-sm tracking-[0.25em] uppercase text-charcoal/50 mb-1">
              Sabtu
            </p>
            <div className="flex items-center justify-center gap-4 my-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
              <span className="font-display text-4xl md:text-5xl font-bold text-charcoal/80">
                06
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            <p className="font-display text-lg tracking-[0.3em] uppercase text-gold">
              Juni 2026
            </p>
          </div>
        </AnimatedSection>

        {/* Countdown */}
        <AnimatedSection variant="fadeUp" delay={0.3} className="mb-10">
          <CountdownTimer targetDate={WEDDING_DATE} />
        </AnimatedSection>

        {/* Event Details */}
        <div className="space-y-4 mb-10">
          {events.map((event, i) => (
            <AnimatedSection
              key={event.title}
              variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={0.2 + i * 0.15}
            >
              <div className="glass-card p-6 relative overflow-hidden">
                {/* Side accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-sage to-gold" />

                <div className="ml-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold">{event.icon}</span>
                    <h3 className="font-display text-lg font-semibold text-charcoal/80">
                      {event.title}
                    </h3>
                  </div>
                  <p className="font-serif text-sm text-charcoal/70 mb-1">
                    {event.time}
                  </p>
                  <p className="font-serif text-sm text-charcoal/50">
                    {event.location}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Venue */}
        <AnimatedSection variant="fadeUp" delay={0.3} className="text-center mb-8">
          <div className="glass-card p-6">
            <MapPin className="w-6 h-6 text-gold mx-auto mb-3" />
            <h3 className="font-display text-base font-semibold text-charcoal/80 mb-1">
              Rumah Kediaman Mempelai Wanita
            </h3>
            <p className="font-serif text-sm text-charcoal/50 leading-relaxed">
              Sukagalih, Kec. Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151
            </p>
          </div>
        </AnimatedSection>

        {/* Action Buttons */}
        <AnimatedSection variant="fadeUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center"
              id="add-to-calendar-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Simpan Tanggal</span>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sage text-center"
              id="open-maps-btn"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Maps</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
