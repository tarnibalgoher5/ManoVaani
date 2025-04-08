import React from 'react';
import './Navbar.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const loginhandle = () => {
        navigate('/signin');
        closeMobileMenu();
    }
    const signuphandle = () => {
        navigate('/signup');
        closeMobileMenu();
    }
    const homehandle = () => {
        navigate('/');
        closeMobileMenu();
    }
 
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div id="navbar">
            <div className="Navbar-content-div">
                {/* manovaani logo */}
                <a href="#home-sec" onClick={homehandle}>       </a>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <nav id="nav-bar" className={click ? "active" : ""}>
                    <a href="#about" className="nav-link" onClick={homehandle}>About</a> 
                    <a href="#connect" className="nav-link" onClick={homehandle}>Resources</a>
                    <a href="#contact" className="nav-link" onClick={homehandle}>Survey</a>
                    <a href="#contact" className="nav-link" onClick={homehandle}>Journal</a>
                    <a href="#" className="nav-link" onClick={loginhandle}>Login</a>
                    {/* <a href="#" className="nav-link" onClick={signuphandle}>SignUp</a> */}
                </nav>
            </div>
        </div>
    )
}

export default Navbar;