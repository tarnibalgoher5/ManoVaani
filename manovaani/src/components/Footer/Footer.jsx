import React from 'react';
import "./Footer.css";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Footer() {
    const navigate = useNavigate(); 

    return (
        <div className="footer">
            <div className="footer-container">
                <img
                    src={logo}
                    alt="Logo"
                    className="footer-logo"
                    onClick={() => navigate('/')}
                />
                <p className='footer-txt'><i>manovaani - your safe haven powered AI driven care</i></p>
                
                <ul className="footer-nav">
                    <li className="footer-link" onClick={() => navigate('/')}>About Us</li>
                    <li className="footer-link" onClick={() => navigate('/survey')}>Survey</li>
                    <li className="footer-link" onClick={() => navigate('/resources')}>Resources</li>
                </ul>
              
            </div>
        </div> 
    ); 
}

export default Footer;
