"use client";

export default function GoldFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12">
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-gold to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[1.5px] bg-gradient-to-b from-gold to-transparent" />
        <div className="absolute top-[3px] left-[3px] w-2 h-2 border-t border-l border-gold/40" />
      </div>
      <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12">
        <div className="absolute top-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-gold to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[1.5px] bg-gradient-to-b from-gold to-transparent" />
        <div className="absolute top-[3px] right-[3px] w-2 h-2 border-t border-r border-gold/40" />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12">
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-gold to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[1.5px] bg-gradient-to-t from-gold to-transparent" />
        <div className="absolute bottom-[3px] left-[3px] w-2 h-2 border-b border-l border-gold/40" />
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12">
        <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-gold to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-[1.5px] bg-gradient-to-t from-gold to-transparent" />
        <div className="absolute bottom-[3px] right-[3px] w-2 h-2 border-b border-r border-gold/40" />
      </div>

      {/* Content */}
      <div className="px-6 py-8 md:px-10 md:py-12">{children}</div>
    </div>
  );
}
