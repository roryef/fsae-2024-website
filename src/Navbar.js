import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '10px', background: '#333', color: 'white', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', margin: '10px', textDecoration: 'none' }}>About</Link>
        </nav>
    );
}

export default Navbar;
