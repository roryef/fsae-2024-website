import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1488);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1488);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <footer style={footerStyle}>
      <div style={quoteStyle}>
        <p>"car go vroom" - Calvin Moon</p>
      </div>

      <div
        style={{
          ...footerContentStyle,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {/* Left: Socials */}
        {!isMobile && (
          <div style={socialsContainerStyle}>
            <h3 style={socialsTitleStyle}>Follow Us</h3>
            <div style={socialsStyle}>
              <a href="https://www.instagram.com/columbiafsae" target="_blank" rel="noopener noreferrer">
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
        )}

        {/* Center: Links */}
        {!isMobile && (<div
          style={{
            ...linksGridStyle,
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'center',
            justifyContent: 'center',
            gap: isMobile ? '10px' : '30px',
            margin: isMobile ? '20px 0' : '0',
            flexGrow: 1,
          }}
        >
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/subteams" style={linkStyle}>Subteams</Link>
          <Link to="/cars" style={linkStyle}>Cars</Link>
          <Link to="/news" style={linkStyle}>News</Link>
          <Link to="/sponsors" style={linkStyle}>Sponsors</Link>
          <Link to="/join" style={linkStyle}>Join Us</Link>
        </div>
      )}

        {/* Right: Buttons */}
        {!isMobile && (
          <div style={rightSectionStyle}>
            <div style={buttonContainerStyle}>
              <a href="mailto:fsae@columbia.edu" style={buttonStyle}>Contact Us</a>
              <a href="https://securepay.cuit.columbia.edu/payment/pub/cufrsponsorships/" style={donateButtonStyle}>Donate</a>
            </div>
          </div>
        )}

        {/* Mobile Only: Merged Left + Right */}
        {isMobile && (
          <>
            {/* Links First */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px 20px',
                width: '100%',
                marginBottom: '20px',
              }}
            >
              <FooterLinks />
            </div>

            {/* Socials Next */}
            <div style={{ ...socialsContainerStyle, alignItems: 'center', width: '100%' }}>
              <h3 style={socialsTitleStyle}>Follow Us</h3>
              <div style={{ ...socialsStyle, justifyContent: 'center', flexWrap: 'wrap' }}>
                <SocialIcons />
              </div>
            </div>

            {/* Buttons Last */}
            <div style={{ ...rightSectionStyle, alignItems: 'center', width: '100%', marginTop: '20px' }}>
              <div style={{ ...buttonContainerStyle, justifyContent: 'center', flexWrap: 'nowrap', flexDirection: 'row', flexShrink: 1 }}>
                <ContactButtons />
              </div>
            </div>
          </>
        )}

      </div>
    </footer>
  );
}

const FooterLinks = () => (
  <>
    <Link to="/" style={linkStyle}>Home</Link>
    <Link to="/about" style={linkStyle}>About</Link>
    <Link to="/subteams" style={linkStyle}>Subteams</Link>
    <Link to="/cars" style={linkStyle}>Cars</Link>
    <Link to="/news" style={linkStyle}>News</Link>
    <Link to="/sponsors" style={linkStyle}>Sponsors</Link>
    <Link to="/join" style={linkStyle}>Join Us</Link>
  </>
);

const SocialIcons = () => (
  <>
    <a href="https://www.instagram.com/columbiafsae" target="_blank" rel="noopener noreferrer">
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
  </>
);

const ContactButtons = () => (
  <>
    <a href="mailto:fsae@columbia.edu" style={buttonStyle}>Contact Us</a>
    <a href="https://securepay.cuit.columbia.edu/payment/pub/cufrsponsorships/" style={donateButtonStyle}>Donate</a>
  </>
);




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
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  textAlign: 'left',
  gap: '20px',
};


const socialsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '200px',
  flex: 1,
};


const socialsTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '8px',
  color: 'white',
};

const socialsStyle = {
  display: 'flex',
  gap: '15px',
};

const iconStyle = {
  width: '35px',
  height: '35px',
  filter: 'invert(1)',
};

const linksGridStyle = {
  display: 'flex',
  //flexWrap: 'wrap',
  gap: '15px 30px',
  justifyContent: 'center',
  //flex: 1,
};


const linkStyle = {
  textDecoration: 'none',
  color: 'gray',
  fontSize: '16px',
  padding: '8px 12px',
  whiteSpace: 'nowrap',
};

const rightSectionStyle = {
  minWidth: '200px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
};


const buttonContainerStyle = {
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap',
  justifyContent: 'flex-end', // overridden to 'center' in mobile
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

const bottomRowContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '20px',
};


export default Footer;
