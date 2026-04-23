import React, { Suspense, use, useContext } from 'react';
import { DataCenter } from './MotherProvider';
import HeroSection from './HeroSection';
import StatsSectionInHome from './StatsSectionInHome';
import Friends from './Friends';
import { HiH1 } from 'react-icons/hi2';
import { useLoaderData } from 'react-router';

const Home = () => {

     const friendsData = useLoaderData();
        // console.log(friendsData);

    return (
        <div>
            <div className='space-y-5 px-30  bg-[#080f1a]/90 min-h-screen'>
                <HeroSection />
                <StatsSectionInHome friendsData={friendsData} />
                <hr className='mb-8'/>
                <h3 className='text-2xl font-semibold mb-9 text-gray-50'>Your Friends</h3>
                <Suspense fallback={<span className="loading loading-dots loading-xl flex justify-self-center-safe"></span>}>
                   <Friends />
                </Suspense> 

                
            </div>
            
        </div>
    );
};

export default Home;