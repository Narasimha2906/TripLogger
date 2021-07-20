import React from 'react';
import { BiHomeAlt, BiCalendarPlus } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="side-nav">
            <div className="nav-bar">
                <li className="nav-item"><Link to="/" style={{ color: '#FFF' }}><BiHomeAlt /></Link></li>
                <li className="nav-item"><Link to="/Add" style={{ color: '#FFF' }}><BiCalendarPlus /></Link></li>
                <li className="nav-item"><Link to="/List" style={{ color: '#FFF' }}><FaCalendarAlt /></Link></li>


            </div>
        </div>
    )
}

export default Navbar;
