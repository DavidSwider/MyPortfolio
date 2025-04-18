import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">David Swider</div>
            <ul className="navbar-links">
                <li><Link to="/aboutme">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
}

export default NavComponent;