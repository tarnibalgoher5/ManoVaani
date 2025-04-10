import React from 'react';
import "./Footer.css";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Footer() {
    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path); 
    };

    return (
        <div className="footer">
            <div className="footer-container">
                <img
                    src={logo}
                    alt="Logo"
                    className="footer-logo"
                    onClick={() => handleNavigation('/')}
                />
            <p className='footer-txt'><i>manovaani - your safe haven powered AI driven care</i></p>
                <ul className="footer-nav">
                    <li className="footer-link" onClick={() => handleNavigation('/aboutus')}>About Us</li>
                    <li className="footer-link" onClick={() => handleNavigation('/surveys')}>Surveys</li>
                    <li className="footer-link" onClick={() => handleNavigation('/resources')}>Resources</li>
                </ul>
                </div>
        </div> 
    ); 
}

export default Footer;