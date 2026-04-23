import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow'>
                <Outlet />
            </div>
            <ToastContainer position='top-center' autoClose={1000} />
            <Footer />  
        </div>
    );
};

export default Root;