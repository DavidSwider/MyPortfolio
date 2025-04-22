import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">David Swider</div>
            <ul className="navbar-links">
                <li><Link to="/aboutme"className="navbar-link">About Me</Link></li>
                <li><Link to="/projects"className="navbar-link">Projects</Link></li>
                <li><Link to="/contact"className="navbar-link">Contact</Link></li>
                <li><Link to="/resume"className="navbar-link">Resume</Link></li>
            </ul>
        </nav>
    );
}

export default NavComponent;