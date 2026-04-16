import React from 'react';
import { DataCenter } from './MotherProvider';
import { useNavigate } from 'react-router';

const Friend = ({friend}) => {

    const navigate = useNavigate();
    function handleDetail(friend) {
        // console.log(friend);
        navigate(`/friend/${friend.id}`);
    }

    return (
          <div onClick={() => handleDetail(friend)} className={`relative border-l-4 ${friend.status === "overdue" ? ' border-red-300' : friend.status === "almost due" ? ' border-green-200' : ' border-green-500'} shadow-md rounded-lg py-7 flex flex-col items-center space-y-2 hover:shadow-lg hover:bg-blue-100 transition duration-300 cursor-pointer`}>

            <img src={friend.picture} className="rounded-full w-30" alt="" />
            <h1 className='font-bold text-2xl'>{friend.name}</h1>
            <h3 className='font-semibold opacity-70 text-lg'>{friend.days_since_contact}d ago</h3>
            <div className='flex gap-2 flex-wrap justify-center'>
                {friend.tags.map((tag, index) => <h3 key={index} className='text-md bg-green-300 rounded-xl px-3 pb-1'>{tag}</h3>)}
            </div>
            
            <h3 className='mt-2'>{friend.status === "overdue" ? <span className='text-red-500 bg-red-200 px-3 rounded-xl pb-1'>Overdue</span> : friend.status === "almost due" ? <span className='text-green-500 bg-green-200 px-3 rounded-xl pb-1'>almost due</span> : <span className='text-green-300 pb-1 bg-green-700 px-3 rounded-xl'>on-track</span>}</h3>

            <h3 onClick={() => handleDetail(friend)} className='absolute text-[10px] text-black opacity-30 right-1 bottom-1 px-3 py-1 rounded-xl'>Details</h3>
        </div>
    );
};

export default Friend;