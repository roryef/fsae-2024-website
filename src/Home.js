import React from 'react';

function Home() {
  return (
    <div style={containerStyle}>
      <img src="/Banana.jpg" alt="Formula Racing" style={imageStyle} />
      <div style={overlayStyle}>
        <img src="/SAECrownWhite.png" alt="Logo" style={logoStyle} />
        <h1 style={headingStyle}>Columbia University Formula Racing</h1>
        <button style={buttonStyle}>JOIN US</button>
      </div>
    </div>
  );
}

// 🔹 Container for full-page background
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  zIndex: 1,
};

// 🔹 Full-screen background image
const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

// 🔹 Centered overlay with logo and text
const overlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// 🔹 Adjusted logo size for better balance
const logoStyle = {
  height: '100px',  // Increased logo size
  marginBottom: '20px',  // Adds spacing between logo and text
};

// 🔹 Bolder, larger heading for visibility
const headingStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginBottom: '20px',
};

// 🔹 Improved button for better visibility
const buttonStyle = {
  padding: '12px 24px',
  border: '2px solid white',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
};

// 🔹 Button hover effect for interactivity
buttonStyle[":hover"] = {
  background: 'white',
  color: 'black',
};

export default Home;
