import React from 'react';

const StatsSectionInHome = () => {

    const statsClass = `bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm`;

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900">100+</h2>
                    <p className="text-gray-500 mt-2 text-lg">Friends</p>
                </div>

                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900">100+</h2>
                    <p className="text-gray-500 mt-2 text-lg">Friends</p>
                </div>

                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900">100+</h2>
                    <p className="text-gray-500 mt-2 text-lg">Friends</p>
                </div>

                <div className={statsClass}>
                    <h2 className="text-3xl font-bold text-emerald-900">100+</h2>
                    <p className="text-gray-500 mt-2 text-lg">Friends</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSectionInHome;