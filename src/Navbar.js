import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={`${process.env.PUBLIC_URL}/logos/LogoWhite.png`} alt="Logo" />
      </Link>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/subteams" className="nav-link" onClick={closeMenu}>Subteams</Link>
        <Link to="/cars" className="nav-link" onClick={closeMenu}>Cars</Link>
        <Link to="/news" className="nav-link" onClick={closeMenu}>News</Link>
        <Link to="/sponsors" className="nav-link" onClick={closeMenu}>Sponsors</Link>
        <Link to="/join" className="join-button" onClick={closeMenu}>Join Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
