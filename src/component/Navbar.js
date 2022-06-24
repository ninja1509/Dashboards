import React, {useState} from 'react';
import '../App.css';
import '../screens/Login';
import logoBig from '../assets/Picture1.png';
import logoMobile from '../assets/logo-final-spiral.png';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='NavBar'>
            <div className='logodiv'>
            <img src={logoBig} className="logoimg"/>
            <img src={logoMobile} className="logoimgMobile"/>
            </div>

            <div className='rightBtnsDiv'>
                <div className='links' id={showLinks ? "hide" : ""}>
                    <a href='#'> Explore </a>
                    <a href='#'> About Us </a>
                    <a href='#'> Sign Up </a>
                    <a href='/loginScreen'> Login </a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>Navigation</button>
            </div>
        </div>
    );
}



export default Navbar;