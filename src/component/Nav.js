import React from 'react';
import logo from "../images/duyeon_logo.png";
import '../css/Nav.css';
import { Link, NavLink } from 'react-router-dom';
function Nav(props) {
    return (
        <div className='nav_section'>
            <div className='nav_bar'>
                <Link to="/"><img src={logo} alt='logo' className='nav_logo' /></Link>
                <div className="nav_menu">
                    <ul>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => "nav_link" + (isActive ? "_activated" : "")}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className={({ isActive }) => "nav_link" + (isActive ? "_activated" : "")}>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/howtomake" className={({ isActive }) => "nav_link" + (isActive ? "_activated" : "")}>How to make</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => "nav_link" + (isActive ? "_activated" : "")}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Nav;