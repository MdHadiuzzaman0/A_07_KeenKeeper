import React, { useContext } from "react";
import { DataCenter } from "./MotherProvider";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { IoArchive } from "react-icons/io5";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { BiMessageSquare, BiPhone, BiVideo } from "react-icons/bi";
import { motion } from "framer-motion"; // ১. মোশন ইমপোর্ট করা

const FriendDetails = () => {
  const friends = useLoaderData();
  const navigation = useNavigate();
  const { friendId } = useParams();

  const selectedFrnd = friends.find((frnd) => frnd.id === parseInt(friendId));
  const { handleBtn } = useContext(DataCenter);

  function handleBack() {
    navigation(-1);
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-[#080f1a]/90 p-6 md:px-10 pt-10 font-sans text-slate-100 overflow-x-hidden">
   
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-serif font-bold text-center mb-10"
      >
        {selectedFrnd.name}
      </motion.h1>

      <div className="max-w-5xl mx-auto bg-slate-100/10 border border-emerald-500/10 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row gap-8">
      
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-950/80 p-8 rounded-2xl border border-emerald-500/10 w-full md:max-w-sm flex flex-col items-center"
          >
            <img
              src={selectedFrnd.picture}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-emerald-500/30"
              alt={selectedFrnd.name}
            />
            <h2 className="text-2xl font-bold font-serif">{selectedFrnd.name}</h2>

            <div className="mt-3 mb-4">
              {selectedFrnd.status === "overdue" ? (
                <span className="text-red-400 bg-red-500/10 border border-red-400/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Overdue</span>
              ) : selectedFrnd.status === "almost due" ? (
                <span className="text-amber-400 bg-amber-500/10 border border-amber-400/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">almost due</span>
              ) : (
                <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">on-track</span>
              )}
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {selectedFrnd.tags.map((tag, index) => (
                <h3 key={index} className="text-xs font-bold uppercase tracking-wide bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                  {tag}
                </h3>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-slate-400 italic text-sm">"{selectedFrnd.note}"</p>
              <p className="text-slate-600 text-xs mt-2">{selectedFrnd.email}</p>
            </div>

            <div className="mt-8 w-full space-y-3">
              <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-emerald-700/60 rounded-xl text-slate-400 hover:bg-emerald-500/10 hover:text-white transition-all text-sm font-semibold">
                <RiNotificationSnoozeLine /> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-red-100/30 rounded-xl text-slate-400 hover:bg-red-300/15 hover:text-red-200 transition-all text-sm font-semibold">
                <IoArchive /> Archive
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-700/20 transition-all text-sm font-semibold">
                <MdDeleteForever /> Delete
              </button>
            </div>
          </motion.div>

          <div className="md:w-2/3 flex flex-col gap-4">
            
            {/* Stats Cards */}
            <motion.div 
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-between gap-2 text-center"
            >
              {[
                { val: selectedFrnd.days_since_contact, label: "Days Since Contact" },
                { val: selectedFrnd.goal, label: "Goal (Days)" },
                { val: selectedFrnd.next_due_date, label: "Next Due" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 shadow-sm px-7 py-5 rounded-xl flex-1">
                  <p className="text-xl font-bold mb-2 text-emerald-400">{stat.val}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Relationship Goal Card */}
            <motion.div 
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-950/80 border border-emerald-500/10 rounded-2xl p-6"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-md font-bold text-emerald-500 uppercase tracking-widest">Relationship Goal</h3>
                <button className="text-[11px] text-slate-600 border border-emerald-500/20 px-3 py-1 rounded-lg hover:text-emerald-500 hover:border-emerald-500/40 transition">Edit</button>
              </div>
              <p className="text-[13px] text-slate-400 leading-relaxed">{selectedFrnd.bio}</p>
            </motion.div>

            {/* Quick Check-In Card */}
            <motion.div 
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-slate-950/80 border border-emerald-500/10 rounded-2xl p-6 flex-grow"
            >
              <h3 className="text-sm text-emerald-500 uppercase tracking-widest mb-4">Quick Check-In</h3>
              <div className="flex gap-3">
                {[
                  { name: "Call", icon: <BiPhone size={20} /> },
                  { name: "Text", icon: <BiMessageSquare size={20} /> },
                  { name: "Video", icon: <BiVideo size={20} /> },
                ].map((actionObj) => (
                  <button
                    onClick={() => handleBtn(actionObj.name, selectedFrnd)}
                    key={actionObj.name}
                    className="flex flex-col flex-1 border border-slate-800 py-4 rounded-xl hover:border-emerald-500/50 shadow-[0_0_3px_rgba(52,211,153,0.2)] hover:shadow-[0_3px_3px_rgba(52,211,153,0.2)] hover:bg-emerald-500/5 hover:text-emerald-500 transition-all font-bold items-center justify-center gap-2 text-sm bg-slate-900"
                  >
                    {actionObj.icon}
                    {actionObj.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Button Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center mt-10 mb-30"
      >
        <button
          className="bg-emerald-500 text-slate-950 px-12 py-3 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          onClick={handleBack}
        >
          Go Home
        </button>
      </motion.div>
    </div>
  );
};

export default FriendDetails;