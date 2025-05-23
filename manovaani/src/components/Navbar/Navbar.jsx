import React, { useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth'; 


function Navbar({ user }) {
    const [click, setClick] = React.useState(false);
    const navigate = useNavigate();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const loginhandle = () => {
        navigate('/signin');
        closeMobileMenu();
    };
    const signuphandle = () => {
        navigate('/signup');
        closeMobileMenu();
    };
    const homehandle = () => {
        navigate('/');
        closeMobileMenu();
    };
    const surveyhandle = () => {
        navigate('/survey');
        closeMobileMenu();
    };
    const resourceshandle = () => {
        navigate('/resources');
        closeMobileMenu();
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/signin');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

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
                {/* Manovaani logo */}
                <a href="#home-sec" className="nav-name" onClick={homehandle}>manovaani</a>
                <nav id="nav-bar" className={click ? "active" : ""}>
                    <a href="#about" className="nav-link" onClick={homehandle}>About</a>
                    <a href="#services" className="nav-link" onClick={homehandle}>Services</a>
                    <a href="#survey" className="nav-link" onClick={surveyhandle}>Survey</a>
                    <a href="#resources" className="nav-link" onClick={resourceshandle}>Resources</a>
                    {user ? (
                        <>
                            <span className="nav-link">Welcome, {user.name || user.displayName}</span>
                            <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
                        </>
                    ) : (
                        <a href="#" className="nav-link" onClick={signuphandle}>Signup</a>
                    )}
                </nav>
            </div>
        </div>
    );
}
export default Navbar;














/* /*import React, { useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const loginhandle = () => {
        navigate('/signin');
        closeMobileMenu();
    };
    const signuphandle = () => {
        navigate('/signup');
        closeMobileMenu();
    };
    const homehandle = () => {
        navigate('/');
        closeMobileMenu();
    };
    const surveyhandle = () => {
        navigate('/survey');
        closeMobileMenu();
    };
    const resourceshandle = () => {
        navigate('/resources');
        closeMobileMenu();
    };

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
            <div className="Navbar-content-div"> */
                /* manovaani logo */
//                 <a href="#home-sec" className="nav-name" onClick={homehandle}>manovaani</a>

//                 <nav id="nav-bar" className={click ? "active" : ""}>
//                     <a href="#about" className="nav-link" onClick={homehandle}>About</a>
//                     <a href="#services" className="nav-link" onClick={homehandle}>Services</a>
//                     <a href="#survey" className="nav-link" onClick={surveyhandle}>Survey</a>
//                     <a href="#resources" className="nav-link" onClick={resourceshandle}>Resources</a>

//                     {/* <a href="#contact" className="nav-link" onClick={homehandle}>Journal</a> */}
//                     <a href="#" className="nav-link" onClick={signuphandle}>Signup</a>


//                     {/* <a href="#" className="nav-link" onClick={signuphandle}>SignUp</a> */}
//                 </nav>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
