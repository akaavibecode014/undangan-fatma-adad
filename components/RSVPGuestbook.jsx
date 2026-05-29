"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, User, Users, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider } from "./ui/FloralAccent";

export default function RSVPGuestbook({ guestName }) {
  const [form, setForm] = useState({ name: guestName || "", attendance: "yes", guests: "1", message: "" });
  const [wishes, setWishes] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loadingWishes, setLoadingWishes] = useState(true);
  const [isPolishing, setIsPolishing] = useState(false);

  useEffect(() => { fetchWishes(); }, []);

  const fetchWishes = async () => {
    setLoadingWishes(true);
    try {
      const res = await fetch("/api/wishes");
      if (res.ok) { const data = await res.json(); setWishes(data.wishes || []); }
    } catch { /* silent */ }
    setLoadingWishes(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) {
        setSubmitted(true);
        if (form.message) setWishes((prev) => [{ name: form.name, message: form.message, timestamp: new Date().toISOString() }, ...prev]);
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch { /* silent */ }
    setSubmitting(false);
  };

  const handlePolishWithAI = async () => {
    if (!form.message) return;
    setIsPolishing(true);
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    const sender = form.name ? form.name.split(" ")[0] : "kami";
    const polishedText = `Selamat menempuh lembaran baru yang sangat indah, Fatma dan Adad. Semoga perjalanan cinta dan ibadah kalian senantiasa abadi, dipenuhi kebahagiaan, serta dilimpahi keberkahan setiap harinya. Doa terbaik menyertai kalian dari ${sender}. ✨`;
    setForm(prev => ({ ...prev, message: polishedText }));
    setIsPolishing(false);
  };

  const attendanceOptions = [
    { value: "yes", label: "Hadir", emoji: "🎉" },
    { value: "no", label: "Tidak Hadir", emoji: "😢" },
    { value: "maybe", label: "Mungkin", emoji: "🤔" },
  ];

  return (
    <section id="rsvp" className="relative section-padding botanical-bg overflow-hidden">
      <div className="max-w-lg mx-auto">
        <AnimatedSection className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold/60 mb-2">Confirmation</p>
          <h2 className="font-script text-4xl md:text-5xl shimmer-text mb-2">RSVP & Ucapan</h2>
          <FloralDivider width={150} className="mx-auto mt-4" />
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="glass-card p-6 md:p-8 mb-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-sage mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-charcoal/80 mb-2">Terima Kasih!</h3>
                  <p className="font-serif text-sm text-charcoal/60">Konfirmasi Anda telah kami terima.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 font-display text-xs tracking-wider uppercase text-charcoal/50 mb-2">
                      <User className="w-3.5 h-3.5" /> Nama
                    </label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-elegant" placeholder="Nama lengkap" required id="rsvp-name-input" />
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="font-display text-xs tracking-wider uppercase text-charcoal/50 mb-2 block">Kehadiran</label>
                    <div className="grid grid-cols-3 gap-2">
                      {attendanceOptions.map((opt) => (
                        <button key={opt.value} type="button" onClick={() => setForm({ ...form, attendance: opt.value })}
                          className={`p-3 rounded-xl border text-center transition-all duration-300 ${form.attendance === opt.value ? "border-gold bg-gold/10 text-gold-dark" : "border-gold/20 bg-white/50 text-charcoal/50 hover:border-gold/40"}`}
                          id={`attendance-${opt.value}-btn`}>
                          <span className="text-lg block">{opt.emoji}</span>
                          <span className="font-display text-xs tracking-wider mt-1 block">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Number of guests */}
                  {form.attendance === "yes" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <label className="flex items-center gap-2 font-display text-xs tracking-wider uppercase text-charcoal/50 mb-2">
                        <Users className="w-3.5 h-3.5" /> Jumlah Tamu
                      </label>
                      <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="input-elegant" id="rsvp-guests-select">
                        {[1, 2, 3, 4, 5].map((n) => (<option key={n} value={n}>{n} orang</option>))}
                      </select>
                    </motion.div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 font-display text-xs tracking-wider uppercase text-charcoal/50 mb-2">
                      <MessageCircle className="w-3.5 h-3.5" /> Ucapan
                    </label>
                    <div className="relative">
                      <textarea 
                        value={form.message} 
                        onChange={(e) => setForm({ ...form, message: e.target.value })} 
                        className={`input-elegant min-h-[120px] resize-none pb-12 transition-opacity ${isPolishing ? "opacity-50" : ""}`} 
                        placeholder="Tulis ucapan untuk kedua mempelai..." 
                        id="rsvp-message-input"
                        disabled={isPolishing}
                      />
                      <AnimatePresence>
                        {form.message.length > 5 && (
                          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute bottom-3 right-3">
                            <button
                              type="button"
                              onClick={handlePolishWithAI}
                              disabled={isPolishing}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold/10 to-gold/20 hover:from-gold/20 hover:to-gold/30 text-[#9E730B] text-[10px] uppercase font-display tracking-wider transition-all border border-gold/30 shadow-sm"
                            >
                              {isPolishing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                              {isPolishing ? "Memproses AI..." : "Magic Polish ✨"}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={submitting || !form.name} className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed" id="rsvp-submit-btn">
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    <span>{submitting ? "Mengirim..." : "Kirim RSVP"}</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Wishes Wall */}
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className="text-center mb-6">
            <h3 className="font-script text-2xl text-gold">Ucapan & Doa</h3>
          </div>
          <div className="max-h-80 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
            {loadingWishes ? (
              <div className="text-center py-8"><Loader2 className="w-6 h-6 animate-spin text-gold/40 mx-auto" /></div>
            ) : wishes.length === 0 ? (
              <div className="text-center py-8 glass-card">
                <MessageCircle className="w-8 h-8 text-gold/20 mx-auto mb-2" />
                <p className="font-serif text-sm text-charcoal/40">Jadilah yang pertama memberikan ucapan!</p>
              </div>
            ) : (
              wishes.map((wish, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center">
                      <span className="font-display text-xs font-bold text-sage">{(wish.name || "?")[0].toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-charcoal/80">{wish.name}</p>
                      <p className="font-serif text-[10px] text-charcoal/30">{wish.timestamp ? new Date(wish.timestamp).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) : ""}</p>
                    </div>
                  </div>
                  <p className="font-serif text-sm text-charcoal/60 leading-relaxed">{wish.message}</p>
                </motion.div>
              ))
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
