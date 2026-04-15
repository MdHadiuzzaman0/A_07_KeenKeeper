import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    
    <div className="bg-[#1e3a34] text-white py-16 px-6 mt-25">
      <div className="max-w-7xl mx-auto text-center">
        
        <h1 className="text-6xl font-bold mb-4">KeenKeeper</h1>
        
        <p className="text-gray-300 mb-8 text-md">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
       
        <h2 className="text-sm font-semibold mb-4">Social Links</h2>
        <div className="flex justify-center gap-4 mb-12">
          <h3 className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1e3a34] hover:bg-gray-200 transition">
            <FaInstagram />
          </h3>
          <h3 className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1e3a34] hover:bg-gray-200 transition">
            <FaFacebookF />
          </h3>
          <h3 className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1e3a34] hover:bg-gray-200 transition">
            <FaTwitter />
          </h3>
        </div>

        <div className="border-t border-white/20 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <h3 className="hover:text-white">Privacy Policy</h3>
            <h3 className="hover:text-white">Terms of Service</h3>
            <h3 className="hover:text-white">Cookies</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;