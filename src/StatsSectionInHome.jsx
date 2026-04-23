import React, { useContext } from "react";
import { DataCenter } from "./MotherProvider";

const StatsSectionInHome = ({ friendsData }) => {
  const friends = friendsData;
  const onTrackLength = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;
  const overdueLength = friends.filter(
    (friend) => friend.status === "overdue",
  ).length;
  const { clickedData } = useContext(DataCenter);

  const stats = [
    {
      value: friends.length,
      label: "Total Friends",
      icon: "👥",
      color: "text-violet-400", // এখানে ভায়োলেট কালার দিলাম
      border: "border-violet-500/30",
      glow: "shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]", // নতুন ভায়োলেট গ্লো
      accent: "bg-violet-400",
    },
    {
      value: onTrackLength,
      label: "On Track",
      icon: "✅",
      color: "text-green-500",
      border: "border-emerald-400/30",
      glow: "shadow-[0_0_30px_rgba(52,211,153,0.2)] hover:shadow-[0_0_50px_rgba(52,211,153,0.2)]",
      accent: "bg-green-400",
    },

    {
      value: overdueLength,
      label: "Need Attention",
      icon: "⚠️",
      color: "text-amber-500",
      border: "border-amber-500/30",
      glow: "shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.2)]",
      accent: "bg-amber-500",
    },
    {
      value: clickedData.length,
      label: "Interactions",
      icon: "⚡",
      color: "text-indigo-400",
      border: "border-indigo-400/30",
      glow: "shadow-[0_0_30px_rgba(129,140,248,0.2)] hover:shadow-[0_0_50px_rgba(129,140,248,0.2)]",
      accent: "bg-indigo-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-1 pb-5">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`relative overflow-hidden bg-slate-900/80 border ${stat.border} rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${stat.glow} shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}
        >
          {/* Top accent line */}
          <div
            className={`absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent ${stat.accent} to-transparent rounded-full`}
          />

          <div className="text-3xl mb-3">{stat.icon}</div>

          <div
            className={`text-[38px] font-extrabold font-serif leading-none mb-2 ${stat.color}`}
          >
            {stat.value}
          </div>

          <div className="text-[13px] text-slate-500 font-bold tracking-widest uppercase font-sans">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSectionInHome;
