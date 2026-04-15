import React, { use, useContext } from 'react';
import { DataCenter } from './MotherProvider';

const StatsSectionInHome = ({friendsData}) => {
    
    const friends = friendsData;
    const onTrackLength = friends.filter(friend => friend.status === "on-track").length;
    const overdueLength = friends.filter(friend => friend.status === "overdue").length;
    console.log(onTrackLength);
    
    const {clickedData} = useContext(DataCenter);
    const statsClass = `bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm`;

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900">{friends.length}</h2>
                    <p className="text-gray-500 mt-2 text-lg">Friends</p>
                </div>

                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900"> {onTrackLength} </h2>
                    <p className="text-gray-500 mt-2 text-lg">On-track</p>
                </div>

                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900"> {overdueLength} </h2>
                    <p className="text-gray-500 mt-2 text-lg">Need Attention</p>
                </div>

                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900">{clickedData.length}</h2>
                    <p className="text-gray-500 mt-2 text-lg">Interactions this month</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSectionInHome;