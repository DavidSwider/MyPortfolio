import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>2025 David Swider. All Rights Reserved.</p>
            <div className="social-icons">
                <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </footer>
    );
}
export default Footer;