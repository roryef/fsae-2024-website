import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={`${process.env.PUBLIC_URL}/logos/LogoWhite.png`} />
      </Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/subteams" className="nav-link">Subteams</Link>
        <Link to="/cars" className="nav-link">Cars</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/sponsors" className="nav-link">Sponsors</Link>
        <Link to="/join" className="join-button">Join Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;