import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
               
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Friends to keep close in your life
                </h1>

                <p className="text-gray-600 max-w-lg mb-6 opacity-80">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <button className="flex items-center gap-2 bg-emerald-800 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
                    <span>+</span> Add a Friend
                </button>
            </div>
        </div>
    );
};

export default HeroSection;