import React from 'react';

function Sponsors() {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Our Sponsors</h1>
      <p style={textStyle}>
        COMING SOON
      </p>
    </div>
  );
}

const pageStyle = { textAlign: 'center', padding: '80px 20px' };
const headingStyle = { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' };
const textStyle = { fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' };

export default Sponsors;

