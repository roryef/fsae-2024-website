import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <img src="/Test.jpg" alt="Formula Racing" style={imageStyle} />
        <div style={overlayStyle}>
          <img src="/LogoWhite.png" alt="Logo" style={logoStyle} />
          <h1 style={headingStyle}>Columbia University Formula Racing</h1>
          <button style={buttonStyle}>
            <Link to="/join" style={{ textDecoration: 'none' }}>JOIN US</Link>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsSectionStyle}>
        <div style={statsOverlayStyle}>
          <h2 style={statsHeadingStyle}>FOUNDED IN [DATE], WE’VE BUILT [X] CARS</h2>
          <p>WE HAVE [X] MEMBERS AND [X] SPONSORS</p>
          <div style={buttonContainerStyle}>
            <button style={smallButtonStyle}>
              <Link to="/team" style={{ textDecoration: 'none' }}>ABOUT</Link>
            </button>
            <button style={smallButtonStyle}>
              <Link to="/sponsors" style={{ textDecoration: 'none' }}>SPONSORS</Link>
            </button>
            <button style={smallButtonStyle}>
              <Link to="/join" style={{ textDecoration: 'none' }}>JOIN</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={missionSectionStyle}>
        <h2 style={missionHeadingStyle}>OUR MISSION</h2>
        <p style={missionTextStyle}>
          Our mission is to educate and develop the next generation of engineers and managers 
          while building a racecar for the Formula SAE competition. The design, construction, and 
          financing of the car provides students with an introduction to all aspects of project and 
          engineering management. By applying theoretical principles to real-world problems, team 
          members develop collaborative problem-solving skills.
        </p>
        <div style={imageContainerStyle}>
          <img src="/Banana.jpg" alt="Team Photo" style={missionImageStyle} />
          <img src="/Banana.jpg" alt="Team Photo" style={missionImageStyle} />
        </div>
      </section>
    </div>
  );
}

const pageStyle = {
  width: '100%',
  overflowX: 'hidden',
};

const heroSectionStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh', // Full screen
  overflow: 'hidden',
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

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

const logoStyle = {
  display: 'block',
  margin: '0 auto',
  height: '100px',
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginBottom: '20px',
};

// join
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

const statsSectionStyle = {
  position: 'relative',
  width: '100%',
  height: '90vh',
  background: `url('/stats-background.jpg') center/cover no-repeat`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
};

const statsOverlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '40px',
  borderRadius: '10px',
};

const statsHeadingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px',
};

const smallButtonStyle = {
  padding: '8px 15px',
  border: '1px solid white',
  borderRadius: '20px',
  background: 'transparent',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
};

const missionSectionStyle = {
  background: 'black',
  color: 'white',
  padding: '80px 20px',
  textAlign: 'center',
};

const missionHeadingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const missionTextStyle = {
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '40px',
};

const missionImageStyle = {
  width: '300px',
  height: 'auto',
  borderRadius: '10px',
};

export default Home;

