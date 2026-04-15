import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const navClass = ({ isActive }) =>
        `px-4 py-1 font-bold rounded-md ${isActive ? "bg-green-400 text-white" : "border border-green-400"}`;

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-9">
                <div className="flex-1">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="flex gap-1">
                    <NavLink to="/" className={navClass}>
                        Home
                    </NavLink>
                    <NavLink to="/timeline" className={navClass}>
                        Timeline
                    </NavLink>
                    <NavLink to="/stats" className={navClass}>
                        Stats
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
