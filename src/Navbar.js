import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src="/LogoWhite.png" alt="Logo" style={{ height: '40px' }} />
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

const navbarStyle = {
  position: 'absolute',  //on top of image
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 30px',
  background: 'rgba(0, 0, 0, 0)',
  color: 'white',
  zIndex: 10, //appears on top of everything
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
