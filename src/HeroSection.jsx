import React from "react";

const HeroSection = () => {
  return (
    <div className="relative py-10 md:py-15 text-center overflow-hidden">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 mb-7 text-4 text-emerald-500 font-semibold tracking-[2px] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
        Personal Relationship Manager
      </div>

      {/* Main Heading */}
      <h1 className="font-serif text-xl md:text-3xl lg:text-5xl font-extrabold leading-[1.1] text-slate-500 mb-5 tracking-tight">
        Friends worth keeping close in your life
      </h1>

      {/* Description */}
      <p className="text-slate-600 w-130 mx-auto mb-9 text-lg leading-relaxed font-sans">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Add Friend Button */}
      <button className="inline-flex items-center gap-2.5 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white px-8 py-2.5 rounded-full text-base font-bold cursor-pointer shadow-[0_0_5px_rgba(16,185,129,0.35),_0_4px_15px_rgba(0,0,0,0.3)] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(16,185,129,0.5),_0_8px_25px_rgba(0,0,0,0.3)] font-sans">
        <span className="text-xl">+</span> Add a Friend
      </button>
    </div>
  );
};

export default HeroSection;
