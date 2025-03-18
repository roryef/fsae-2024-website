import React from 'react';

function About() {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={textStyle}>
        Learn about our team, our history, and what drives us to compete in Formula SAE.
      </p>
    </div>
  );
}

const pageStyle = { textAlign: 'center', padding: '80px 20px' };
const headingStyle = { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' };
const textStyle = { fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' };

export default About;
