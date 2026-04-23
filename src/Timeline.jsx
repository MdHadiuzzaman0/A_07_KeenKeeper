import React, { useContext, useEffect, useState } from 'react';
import { DataCenter } from './MotherProvider';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from "framer-motion"; // অ্যানিমেশনের জন্য
import { BiPhone, BiMessageSquare, BiVideo } from "react-icons/bi"; // সুন্দর আইকন

const Timeline = () => {
    const { clickedData, handleAllClear } = useContext(DataCenter);
    const navigate = useNavigate();

    const [sorted, setSorted] = useState('');
    const [modifiedData, setModifiedData] = useState([]);
    
    function handle(e) {
        e.preventDefault();
        const value = e.target.name.value;
        const searchValue = value.toLowerCase().trim();
        const name = clickedData.filter(data => 
            data.name.toLowerCase().includes(searchValue) || 
            data.act.toLowerCase().includes(searchValue) || 
            data.displayTime.toLowerCase().includes(searchValue)
        );
        setModifiedData(name);
    }

    useEffect(() => {
        if (sorted === '') {
            setModifiedData([...clickedData]);
        } else if (sorted === 'Call') {
            setModifiedData([...clickedData].filter(data => data.act === 'Call'));
        } else if (sorted === 'Text') {
            setModifiedData([...clickedData].filter(data => data.act === 'Text'));
        } else if (sorted === 'Video') {
            setModifiedData([...clickedData].filter(data => data.act === 'Video'));
        } else if (sorted === 'Date') {
            setModifiedData([...clickedData].sort((a, b) => b.fullTime - a.fullTime));
        }
    }, [sorted, clickedData]);
    
    return (
        <div className="min-h-screen bg-[#080f1a]/90 p-6 md:px-10 pt-10 font-sans text-slate-100">
            <h1 className="text-4xl font-serif font-bold text-center mb-4 text-emerald-400">Timeline</h1>
            <p className='text-center text-slate-400 mb-10'>Track your interactions with friends seamlessly.</p>

            {/* Controls */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto mb-10'>            
                <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn bg-slate-950 border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/20">
                        Sorted by {sorted} 
                    </div>
                    <ul tabIndex="0" className="dropdown-content menu bg-slate-900 border border-slate-700 rounded-box z-10 w-52 p-2 shadow-xl">
                        <li onClick={() => setSorted('')}><a>No Sorting</a></li>
                        <li onClick={() => setSorted('Call')}><a>Call</a></li>
                        <li onClick={() => setSorted('Text')}><a>Text</a></li>
                        <li onClick={() => setSorted('Video')}><a>Video call</a></li>
                        <li onClick={() => setSorted('Date')}><a>Date</a></li>
                    </ul>
                </div>

                <form className='flex w-full md:w-auto' onSubmit={handle}>
                    <input type="text" name='name' placeholder="Search interactions..." className="input input-bordered w-full md:w-64 bg-slate-900 border-emerald-500/20 focus:border-emerald-500 py-5" />
                    <button type="submit" className="btn bg-emerald-500 text-slate-950 hover:bg-emerald-400 ml-2 border-none">Search</button>
                </form>
            </div>

            {/* List */}
            <div className="max-w-5xl mx-auto space-y-3">
                {modifiedData.length === 0 && (
                    <div className='text-center border border-emerald-500/20 rounded-2xl p-10 bg-slate-950/50'>
                        <h1 className='text-xl text-slate-400'>No interactions found yet!</h1>
                    </div>
                )}

                <AnimatePresence>
                    {modifiedData.map((data, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className='border border-emerald-500/10 p-5 rounded-xl bg-slate-950/80 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-between'
                        >
                            <div className="flex items-center gap-4">
                                {data.act === "Call" && <div className="text-green-400 bg-green-500/10 p-3 rounded-full"><BiPhone size={24} /></div>}
                                {data.act === "Text" && <div className="text-amber-400 bg-amber-500/10 p-3 rounded-full"><BiMessageSquare size={24} /></div>}
                                {data.act === "Video" && <div className="text-purple-400 bg-purple-500/10 p-3 rounded-full"><BiVideo size={24} /></div>}
                                
                                <div>
                                    <p className='text-lg font-semibold'>
                                        {data.act === "Call" ? `Calling to ${data.name}` : 
                                         data.act === "Text" ? `Sending text to ${data.name}` : 
                                         `Video call with ${data.name}`}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Time aligned to the right */}
                            <div className='text-sm text-slate-500 font-mono'>
                                {data.displayTime}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-center gap-4 mt-15 mb-20">
                <button onClick={() => navigate(-1)} className='btn bg-slate-800 text-slate-200 border-none hover:bg-slate-700 px-8'>Go Back</button>
                <button onClick={handleAllClear} className='btn bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20 px-8'>Clear All</button>
            </div>
        </div>
    );
};

export default Timeline;