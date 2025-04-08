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

                <ul className="footer-nav">
                    <li onClick={() => handleNavigation('/aboutus')}>About Us</li>
                    <li onClick={() => handleNavigation('/surveys')}>Surveys</li>
                    <li onClick={() => handleNavigation('/resources')}>Resources</li>
                </ul>
                </div>
                <div className='footer-container ft2'>
                <div className='footerText'> 
              <h3>manovaani</h3>
              <h6>your safe haven powered with AI driven care</h6>
                </div>
                </div>
        </div> 
    );
}

export default Footer;