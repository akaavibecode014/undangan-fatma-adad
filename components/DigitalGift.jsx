"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, CreditCard, Wallet } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { FloralDivider } from "./ui/FloralAccent";

const accounts = [
  { id: "bca", bank: "Bank BCA", number: "1482422165", name: "Fatma Fauziah Fadillah", icon: <CreditCard className="w-5 h-5" /> },
  { id: "dana", bank: "DANA", number: "088971661622", name: "Adad Mauludi", icon: <Wallet className="w-5 h-5" /> },
];

function AccountCard({ account }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(account.number); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="glass-card p-5 hover:border-gold/40 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">{account.icon}</div>
        <div>
          <h4 className="font-display text-sm font-semibold text-charcoal/80">{account.bank}</h4>
          <p className="font-serif text-xs text-charcoal/50">a.n. {account.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 px-3 py-2 bg-ivory/80 rounded-lg border border-gold/10">
          <p className="font-mono text-sm text-charcoal/70 tracking-wider">{account.number}</p>
        </div>
        <button onClick={handleCopy} className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${copied ? "bg-sage text-white" : "bg-gold/10 text-gold hover:bg-gold/20"}`} id={`copy-${account.id}-btn`}>
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

export default function DigitalGift() {
  return (
    <section id="digital-gift" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 diamond-pattern opacity-30" />
      <div className="relative z-10 max-w-lg mx-auto">
        <AnimatedSection className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold/60 mb-2">Wedding Gift</p>
          <h2 className="font-script text-4xl md:text-5xl shimmer-text mb-2">Amplop Digital</h2>
          <FloralDivider width={150} className="mx-auto mt-4" />
          <p className="font-serif text-sm text-charcoal/60 mt-4 leading-relaxed max-w-xs mx-auto">Doa restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
        </AnimatedSection>
        <div className="space-y-3 mb-6">
          {accounts.map((account, i) => (
            <AnimatedSection key={account.id} variant="fadeUp" delay={0.1 + i * 0.1}><AccountCard account={account} /></AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
