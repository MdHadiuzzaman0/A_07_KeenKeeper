import React from "react";
import { NavLink } from "react-router";
import { BiHomeAlt2, BiBarChartAlt2 } from "react-icons/bi"; // আইকন ইমপোর্ট
import { MdTimeline } from "react-icons/md";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-full ${isActive
      ? "bg-emerald-500 text-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
      : "text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/5 border border-transparent hover:border-emerald-500/30"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a1019]/85 backdrop-blur-xl border-b border-emerald-500/10">
      <div className="max-w-[1500px] mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer hover:scale-102">
          {/* Logo Icon Container */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-400 rounded-[10px] animate-pulse opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[10px] flex items-center justify-center shadow-[0_0_5px_rgba(16,185,129,0.5)] group-hover:rotate-1 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.7)] transition-all duration-300 ease-in-out">
              <img
                src="/favicon..png"
                alt="KeenKeeper Logo"
                className="w-5 h-5 object-contain transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          </div>

          {/* Logo Text */}
          <span className="font-serif text-xl font-bold tracking-[0.5px] bg-gradient-to-br from-emerald-500 to-emerald-200 bg-clip-text text-transparent hidden sm:inline-block">
            KeenKeeper
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex gap-1">
          <NavLink to="/" className={navClass}>
            <BiHomeAlt2 size={18} /> Home
          </NavLink>
          <NavLink to="/timeline" className={navClass}>
            <MdTimeline size={18} /> Timeline
          </NavLink>
          <NavLink to="/stats" className={navClass}>
            <BiBarChartAlt2 size={18} /> Stats
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;