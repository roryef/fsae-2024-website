import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={footerStyle}>
      {/* Quote Section */}
      <div style={quoteStyle}>
        <p>"car go vroom" - Calvin Moon</p>
      </div>

      <div style={footerContentStyle}>
        {/* Left: Social Media Links */}
        <div style={socialsContainerStyle}>
          <h3 style={socialsTitleStyle}>Follow Us</h3>
          <div style={socialsStyle}>
            <a href="https://www.instagram.com/columbiafsae?igsh=MTNqYTJtNjVqNmozbA==" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logos/instagram.png`} alt="Instagram" style={iconStyle} />
            </a>
            <a href="https://www.youtube.com/@columbiafsae" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logos/youtube.png`} alt="YouTube" style={iconStyle} />
            </a>
            <a href="https://www.tiktok.com/@columbiafsae" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logos/tiktok.png`} alt="TikTok" style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/company/columbia-university-formula-sae/" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logos/linkedin.png`} alt="LinkedIn" style={iconStyle} />
            </a>
          </div>
        </div>

        <div style={linksGridStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/subteams" style={linkStyle}>Subteams</Link>
          <Link to="/cars" style={linkStyle}>Cars</Link>
          <Link to="/news" style={linkStyle}>News</Link>
          <Link to="/sponsors" style={linkStyle}>Sponsors</Link>
          <Link to="/join" style={linkStyle}>Join Us</Link>
        </div>

        <div style={rightSectionStyle}>
          {/* Bottom Right Buttons */}
          <div style={buttonContainerStyle}>
            <a href="mailto:fsae@columbia.edu" style={buttonStyle}>Contact Us</a>
            <Link to="/sponsors" style={donateButtonStyle}>Donate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


const footerStyle = {
  width: '100%',
  background: 'black',
  color: 'gray',
  padding: '40px 20px',
  textAlign: 'center',
};

const quoteStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  flexWrap: 'wrap',
};

const socialsContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // ✅ Stack title above icons
  alignItems: 'flex-start', // ✅ Align to the left side
  marginLeft: '20px',
};

const socialsTitleStyle = {
  fontSize: '1.2rem', // ✅ Smaller title size
  fontWeight: 'bold',
  marginBottom: '8px', // ✅ Space between title and icons
  color: 'white',
};

const socialsStyle = {
  display: 'flex',
  gap: '15px', // ✅ Slightly reduced spacing between icons
};

const iconStyle = {
  width: '35px', // ✅ Reduced icon size (between first and second versions)
  height: '35px',
  filter: 'invert(1)', // ✅ Keeps icons white
};

const rightSectionStyle = {
  textAlign: 'right',
  marginRight: '20px',
};

const linksGridStyle = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
};

const linkStyle = {
  display: 'block',
  textDecoration: 'none',
  color: 'gray',
  fontSize: '16px',
  marginBottom: '8px',
};

const buttonContainerStyle = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'right',
  gap: '15px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: '2px solid white',
  borderRadius: '30px',
  fontSize: '16px',
  fontWeight: 'bold',
  background: 'transparent',
  color: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
};

const donateButtonStyle = {
  ...buttonStyle,
  background: 'white',
  color: 'black',
};

export default Footer;
