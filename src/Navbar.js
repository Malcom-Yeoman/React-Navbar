import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Ma Marque</div>
            <div className={`navbar-items ${isOpen ? 'show' : ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Accueil</a>
                <a href="#about" onClick={() => setIsOpen(false)}>À propos</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
            <div className={`burger ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;