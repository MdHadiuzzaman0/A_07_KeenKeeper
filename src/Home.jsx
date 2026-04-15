import React, { Suspense } from 'react';
import HeroSection from './HeroSection';
import StatsSectionInHome from './StatsSectionInHome';
import Friends from './Friends';
import { HiH1 } from 'react-icons/hi2';

const Home = () => {
    return (
        <div>
            <div className='space-y-5 mt-9 px-30'>
                <HeroSection />
                <StatsSectionInHome />
                <hr className='opacity-10 my-9'/>
                <h3 className='text-2xl font-semibold'>Your Friends</h3>
                <Suspense fallback={<h1>Loading...</h1>}>
                   <Friends />
                </Suspense>
              
                
            </div>
            
        </div>
    );
};

export default Home;