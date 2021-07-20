import React from 'react';
import { BiHomeAlt, BiCalendarPlus } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="side-nav">
            <div className="nav-bar">
                <li className="nav-item"><Link to="/"><BiHomeAlt /></Link></li>
                <li className="nav-item"><Link to="/Add"><BiCalendarPlus /></Link></li>
                <li className="nav-item"><Link to="/List"><FaCalendarAlt /></Link></li>


            </div>
        </div>
    )
}

export default Navbar;
