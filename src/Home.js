import React from 'react';

function Home() {
  return (
    <div style={containerStyle}>
      <img src="/Test.jpg" alt="Formula Racing" style={imageStyle} />
      <div style={overlayStyle}>
        <img src="/logo.svg" alt="Logo" style={{ height: '80px' }} />
        <h1>Columbia University Formula Racing</h1>
        <button style={buttonStyle}>JOIN US</button>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden'
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const overlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center'
};

const buttonStyle = {
  padding: '10px 20px',
  border: '1px solid white',
  borderRadius: '20px',
  fontSize: '18px',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  marginTop: '20px'
};

export default Home;