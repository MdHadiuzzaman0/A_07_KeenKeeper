import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-[#080f1a] border-t border-emerald-900/30 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Brand Name */}
        <h1 className="text-5xl font-serif font-bold text-emerald-500 mb-4">KeenKeeper</h1>
        
        <p className="max-w-md mx-auto text-slate-400 mb-8 text-sm leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaFacebookF />, label: "Facebook" },
            { icon: <FaTwitter />, label: "Twitter" }
          ].map((social, idx) => (
            <a 
              key={idx}
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="border-t border-emerald-900/20 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;