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
            <div className='space-y-5 mt-9 px-30'>
                <HeroSection />
                <StatsSectionInHome friendsData={friendsData} />
                <hr className='opacity-10 my-9'/>
                <h3 className='text-2xl font-semibold'>Your Friends</h3>
                <Suspense fallback={<span className="loading loading-dots loading-xl flex justify-self-center-safe"></span>}>
                   <Friends />
                </Suspense> 

                
            </div>
            
        </div>
    );
};

export default Home;