import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src="/SAECrownWhite.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/team" style={linkStyle}>Team</Link>
        <Link to="/news" style={linkStyle}>News</Link>
        <Link to="/sponsors" style={linkStyle}>Sponsors</Link>
        <Link to="/contact" style={buttonStyle}>Contact</Link>
      </div>
    </nav>
  );
}

// 🔹 Adjusted styles to make the navbar overlay the background
const navbarStyle = {
  position: 'absolute',  // Ensures it's on top of the image
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 30px',
  background: 'rgba(0, 0, 0, 0)', // Slightly transparent black
  color: 'white',
  zIndex: 10, // Ensures it appears on top of everything
};

const linkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px'
};

const buttonStyle = {
  padding: '8px 15px',
  border: '1px solid white',
  borderRadius: '20px',
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px'
};

export default Navbar;
