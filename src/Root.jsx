import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
 import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer position='top-center' autoClose={1000} />
        </div>
    );
};

export default Root;