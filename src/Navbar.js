// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav style={navbarStyle}>
//       <Link to="/" style={{ textDecoration: 'none' }}>
//         <img src="/LogoWhite.png" alt="Logo" style={{ height: '40px' }} />
//         </Link>
//       <div>
//         <Link to="/" style={linkStyle}>Home</Link>
//         <Link to="/about" style={linkStyle}>About</Link>
//         <Link to="/subteams" style={linkStyle}>Subteams</Link>
//         <Link to="/cars" style={linkStyle}>Cars</Link>
//         <Link to="/news" style={linkStyle}>News</Link>
//         <Link to="/sponsors" style={linkStyle}>Sponsors</Link>
//         <Link to="/join" style={buttonStyle}>Join Us</Link>
//       </div>
//     </nav>
//   );
// }




// const navbarStyle = {
//   position: 'absolute',  //on top of image
//   top: 0,
//   left: 0,
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '15px 30px',
//   background: 'rgba(0, 0, 0, 0)',
//   color: 'white',
//   zIndex: 10, //appears on top of everything
// };

// const linkStyle = {
//   margin: '0 15px',
//   textDecoration: 'none',
//   color: 'white',
//   fontSize: '18px'
// };

// const buttonStyle = {
//   padding: '8px 15px',
//   border: '1px solid white',
//   borderRadius: '20px',
//   textDecoration: 'none',
//   color: 'white',
//   fontSize: '18px'
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Make sure this path matches your file structure

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/logos/LogoWhite.png" alt="Logo" />
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