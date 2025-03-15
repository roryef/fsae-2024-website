import React from 'react';

function Join() {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Join Columbia Formula Racing</h1>
      <p style={textStyle}>
        Become a part of our team and gain hands-on experience in building a Formula SAE race car.
        Whether you're interested in engineering, business, or marketing, there's a place for you!
      </p>
      <button style={applyButtonStyle}>Join Now</button>
    </div>
  );
}

const pageStyle = {
  textAlign: 'center',
  padding: '80px 20px',
  backgroundColor: 'black',
  color: 'white',
  minHeight: '100vh',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const textStyle = {
  fontSize: '1.2rem',
  maxWidth: '700px',
  margin: '0 auto',
  lineHeight: '1.6',
};

const applyButtonStyle = {
  padding: '12px 24px',
  border: '2px solid white',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  marginTop: '20px',
};

export default Join;
