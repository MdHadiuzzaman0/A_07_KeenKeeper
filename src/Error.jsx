import React from 'react';
import { useNavigate } from 'react-router';


const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7f6] text-center px-6">
        
            <h1 className="text-[150px] md:text-[200px] font-extrabold text-[#24463a] animate-pulse">
                404
            </h1>
        
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Oops! Page not found
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <button 
                onClick={() => navigate('/')} 
                className="px-8 py-3 bg-[#24463a] text-white font-semibold rounded-full hover:bg-[#1a352c] transition duration-300 shadow-lg hover:scale-105 transform"
            >
                Back to Home
            </button>

            <div className="mt-16 flex gap-2">
                <span className="w-3 h-3 bg-gray-300 rounded-full animate-bounce"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-200"></span>
            </div>
        </div>
    );
};

export default Error;