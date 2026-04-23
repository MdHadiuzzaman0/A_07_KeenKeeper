import React, { useContext, useEffect, useState } from "react";
import { DataCenter } from "./MotherProvider";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { FaSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Stats = () => {
    const { call, text, video } = useContext(DataCenter);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (call.length === 0 && text.length === 0 && video.length === 0) {
            setData([
                { name: 'No Activity', value: 100, fill: '#ef4444' },
            ]);
        } else {
            setData([
                { name: 'Calls', value: call.length, fill: '#0088FE' },
                { name: 'Texts', value: text.length, fill: '#00C49F' },
                { name: 'Video', value: video.length, fill: '#FFBB28' }
            ]);
        }
    }, [call.length, text.length, video.length]);

    return (
        <div className="min-h-screen bg-[#080f1a]/90 p-6 md:px-10 pt-20">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-slate-950/80 border border-emerald-500/10 p-10 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            >
                <h1 className="text-2xl font-bold text-center mb-10 text-emerald-400 font-serif">Overview of Activity</h1>
                
                {/* Chart Area */}
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={100}
                                outerRadius={130}
                                paddingAngle={8}
                                dataKey="value"
                                cornerRadius={10}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981', borderRadius: '10px', color: '#fff' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Stats Legend Grid */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/30 transition-all">
                        <p className="text-blue-500 font-bold text-lg mb-1">{call.length}</p>
                        <p className="text-slate-400 text-sm flex items-center justify-center gap-2"> <FaSquare size={10} /> Calls</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/30 transition-all">
                        <p className="text-emerald-400 font-bold text-lg mb-1">{text.length}</p>
                        <p className="text-slate-400 text-sm flex items-center justify-center gap-2"> <FaSquare size={10} /> Texts</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/30 transition-all">
                        <p className="text-yellow-500 font-bold text-lg mb-1">{video.length}</p>
                        <p className="text-slate-400 text-sm flex items-center justify-center gap-2"> <FaSquare size={10} /> Video</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-emerald-500/30 transition-all">
                        <p className="text-red-500 font-bold text-lg mb-1">{call.length + text.length + video.length === 0 ? "0" : "0"}</p>
                        <p className="text-slate-400 text-sm flex items-center justify-center gap-2"> <FaSquare size={10} /> None</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Stats;