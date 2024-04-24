import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" exact="true" activeclassname="active">HOME</NavLink>
                <NavLink to="/served-from-store" activeclassname="active">VIEW STORED & GLOBALLY AVAILABLE DATA</NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
