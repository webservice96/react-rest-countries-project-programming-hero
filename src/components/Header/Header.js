import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home"> Home </a>
                <a href="/test"> About </a>
                <a href="/home"> Contact </a>
                <a href="/home"> Live Caht </a>
            </nav>
        </div>
    );
};

export default Header;