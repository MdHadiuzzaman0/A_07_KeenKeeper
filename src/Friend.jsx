import React from 'react';
import { useNavigate } from 'react-router';

const Friend = ({friend}) => {

    const navigate = useNavigate();
    function handleDetail(friend) {
        navigate(`/friend/${friend.id}`);
    }

    const getRingColor = (status) => {
        if (status === "overdue") return "from-red-400";
        if (status === "almost due") return "from-amber-400";
        return "from-emerald-400";
    };

    return (
        <div onClick={() => handleDetail(friend)} 
            className="group relative flex flex-col items-center gap-2 p-6 rounded-xl bg-slate-900/80 border border-slate-700/50 cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]" >

            <div className={`p-[3px] rounded-full bg-gradient-to-br ${getRingColor(friend.status)} to-transparent mb-1`}>
                <img src={friend.picture} className="rounded-full w-20 h-20 object-cover border-[3px] border-slate-950" alt="" />
            </div>
            
            <h1 className='font-bold text-xl text-slate-100 font-serif'>{friend.name}</h1>
            
            <h3 className='font-semibold text-sm text-slate-500'>{friend.days_since_contact}d ago</h3>
            
            <div className='flex gap-1 flex-wrap justify-center my-1'>
                {friend.tags.map((tag, index) => 
                    <h3 key={index} className='text-[11px] font-bold uppercase tracking-wide bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full'>
                        {tag}
                    </h3>
                )}
            </div>
            
            <h3 className='mt-2'>
                {friend.status === "overdue" ? 
                    <span className='text-red-400 bg-red-500/10 border border-red-400/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest'>Overdue</span> 
                : friend.status === "almost due" ? 
                    <span className='text-amber-400 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest'>almost due</span> 
                : 
                    <span className='text-emerald-700 bg-emerald-500 border border-emerald-500/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest'>on-track</span>
                }
            </h3>

            <h3 className='absolute text-[10px] text-white uppercase tracking-widest right-4 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity'>Details →</h3>
        </div>
    );
};

export default Friend;