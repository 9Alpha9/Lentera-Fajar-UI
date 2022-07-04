import React from 'react';
import './NavBar';
import './NavBarStyles.css';
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    return(
        <header className='w-full'>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <a href="/#">Home</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                    <FaBars />
                </button>
        </header>
    );
}

export default NavBar;